import { Request, Response } from "express";
import { iUserCreate } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { listOneUserService } from "../services/users/listOneUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { loginUserService } from "../services/users/loginUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUserService(data);
  return res.status(201).json(user);
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

export const listOneUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await listOneUserService(id);

  return res.status(200).json(user);
};

export const loginUserController = async (req: Request, res: Response) => {
  const data: iUserCreate = req.body;
  const token = await loginUserService(data);
  return res.status(201).json({ token });
};
