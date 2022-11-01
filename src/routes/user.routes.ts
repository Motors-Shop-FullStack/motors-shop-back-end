import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/users.controllers";

export const userRoutes = Router();

userRoutes.use("/register", createUserController);
userRoutes.use("/login", loginUserController);
