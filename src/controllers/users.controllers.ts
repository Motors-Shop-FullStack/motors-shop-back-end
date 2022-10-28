import { Request, Response, NextFunction } from "express";
import { IUserCreate } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: IUserCreate = req.body;
  try {
    const user = await createUserService(data);
    return res.status(201).send(user);
  } catch (e) {
    next(e);
  }
};
