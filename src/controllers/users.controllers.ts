import { Request, Response } from "express";
import { iUserCreate } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listOneUserService } from "../services/users/listOneUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { loginUserService } from "../services/users/loginUser.service";
import { updateAddressUserService } from "../services/users/updateAddressUser.service";
import { updateUserService } from "../services/users/updateUser.service";

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

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const user = await updateUserService(id, data);
  return res.status(200).json(user);
};

export const updateAddressUserController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const data = req.body;
  const user = await updateAddressUserService(id, data);
  return res.status(200).json(user);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(id);
  return res.status(204).json({ message: "Deleted user!" });
};

export const loginUserController = async (req: Request, res: Response) => {
  const data: iUserCreate = req.body;
  const token = await loginUserService(data);
  return res.status(201).json({ token });
};
