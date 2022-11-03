import { prisma } from "../../app";
import { iUserCreateResponse } from "../../interfaces/users.interface";

export const listUsersService = async (): Promise<iUserCreateResponse[]> => {
  const users = await prisma.user.findMany();

  const response: iUserCreateResponse[] = [];

  users.forEach((user) => {
    const { password, cpf, ...userResponse } = user;
    response.push(userResponse);
  });

  return response;
};
