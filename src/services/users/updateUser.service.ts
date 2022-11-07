import { hash } from "bcrypt";
import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import { iUserResponse, iUserUpdate } from "../../interfaces/users.interface";

export const updateUserService = async (
  userId: string,
  data: iUserUpdate
): Promise<iUserResponse> => {
  if (data.cpf) {
    const verifyCPF = await prisma.user.findUnique({
      where: {
        cpf: data.cpf,
      },
    });

    if (verifyCPF) {
      throw new AppError("CPF already exists");
    }
  }

  if (data.email) {
    const verifyEmail = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (verifyEmail) {
      throw new AppError("Email already exists");
    }
  }

  if (data.password) {
    const hashedPass = await hash(data.password, 8);
    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...data,
        updated_at: new Date(),
        password: hashedPass,
      },
    });
  } else {
    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        updated_at: new Date(),
        ...data,
      },
    });
  }

  const newUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (newUser) {
    const { password, cpf, ...response } = newUser;
    return response;
  } else {
    throw new AppError("User not found!");
  }
};
