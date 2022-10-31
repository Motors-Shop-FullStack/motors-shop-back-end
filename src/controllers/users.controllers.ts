import { Request, Response, NextFunction } from "express";
import { IUserCreate } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const data: IUserCreate = req.body;
  const user = await createUserService(data);
  return res.status(201).send(user);
};
