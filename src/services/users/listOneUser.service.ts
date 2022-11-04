// import { prisma } from "../../app";
import prisma from "../../../prisma/client";
import { AppError } from "../../errors/appError";
import { iUserResponse } from "../../interfaces/users.interface";

export const listOneUserService = async (
  userId: string
): Promise<iUserResponse> => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      sales: true,
    },
  });
  if (user) {
    const { password, cpf, ...response } = user;
    return response;
  } else {
    throw new AppError("User not found!");
  }
};
