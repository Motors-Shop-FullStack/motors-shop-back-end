import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/users.controllers";

export const userRoutes = Router();

userRoutes.post("/register", createUserController);
userRoutes.post("/login", loginUserController);
