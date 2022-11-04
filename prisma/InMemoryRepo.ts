import { v4 as uuid } from "uuid";
import { iUserCreate } from "../src/interfaces/users.interface";

export const usersMemory: iUserCreate[] = [];

export async function createUser(user: any) {
  Object.assign(user, {
    id: uuid(),
    created_at: new Date(),
    updated_at: new Date(),
  });

  const { password, cpf, ...rest } = user;

  usersMemory.push(rest);

  return rest;
}

export async function verifyUser(email: string, cpf: number) {
  const userEmail = usersMemory.some((user) => user.email == email);
  if (userEmail) {
    return userEmail;
  }
  const userCPF = usersMemory.some((user) => user.cpf == cpf);
  if (userCPF) {
    return userCPF;
  }
}
