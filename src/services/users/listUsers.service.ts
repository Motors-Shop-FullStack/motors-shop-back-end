import { prisma } from "../../app";
import { iUserResponse } from "../../interfaces/users.interface";

export const listUsersService = async (): Promise<iUserResponse[]> => {
  const users = await prisma.user.findMany();

  const response: iUserResponse[] = [];

  users.forEach((user) => {
    const { password, cpf, ...userResponse } = user;
    response.push(userResponse);
  });

  return response;
};
