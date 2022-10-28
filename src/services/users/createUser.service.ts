//import { ISalesCreate } from "../../interfaces/sales.interface" ;
import { hash } from "bcrypt";
import { randomUUID } from "crypto";
import { response } from "express";
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

  const { description } = data;

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
      address: data.address,
      sales: {
        create: [],
      },
    },
    include: {
      sales: true,
    },
  });

  const { password, ...response } = user;

  return response;
};
