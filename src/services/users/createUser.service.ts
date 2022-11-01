//import { ISalesCreate } from "../../interfaces/sales.interface" ;
import { hash } from "bcrypt";
import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import {
  IUserCreate,
  IUserCreateResponse,
} from "../../interfaces/users.interface";

export const createUserService = async (
  data: IUserCreate
): Promise<IUserCreateResponse> => {
  const checkUser = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (checkUser) {
    throw new AppError("User already exists", 400);
  }

  const hashedPass = await hash(data.password, 8);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPass,
      cpf: data.cpf,
      account_type: data.account_type,
      phone: data.phone,
      birthdate: data.birthdate,
      description: data.description,
      sales: {
        create: [],
      },
    },
    include: {
      sales: true,
    },
  });

  const newAddress = await prisma.address.create({
    data: {
      cep: data.address.cep,
      state: data.address.state,
      city: data.address.city,
      street: data.address.street,
      number: data.address.number,
      complement: data.address.complement,
      user_id: user.id,
    },
  });

  const newUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    include: {
      address: true,
    },
  });

  if (!newUser) {
    throw new AppError("User is not created", 400);
  }

  const { password, ...response } = newUser;

  return response;
};
