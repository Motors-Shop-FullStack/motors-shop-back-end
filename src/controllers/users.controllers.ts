import { Request, Response, NextFunction } from "express";
import { createUserService } from "../services/users/createUser.service";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  try {
    const user = await createUserService(data);
    return res.status(201).send(user);
  } catch (e) {
    next(e);
  }
};
