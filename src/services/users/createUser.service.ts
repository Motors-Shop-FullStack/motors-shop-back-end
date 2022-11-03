import { hash } from "bcrypt";
import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import { iUserCreate, iUserResponse } from "../../interfaces/users.interface";

export const createUserService = async (
  data: iUserCreate
): Promise<iUserResponse> => {
  const verifyEmail = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (verifyEmail) {
    throw new AppError("Email already exists");
  }

  const verifyCPF = await prisma.user.findUnique({
    where: { cpf: data.cpf },
  });

  if (verifyCPF) {
    throw new AppError("CPF already exists");
  }

  const hashedPass = await hash(data.password, 8);

  const { address, ...rest } = data;

  const user = await prisma.user.create({
    data: {
      ...rest,
      password: hashedPass,
      sales: {
        create: [],
      },
    },
  });
  let newAddress;

  if (address) {
    newAddress = await prisma.address.create({
      data: {
        ...address,
        user_id: user.id,
      },
    });
  }

  const { password, cpf, ...response } = user;

  return response;
};
