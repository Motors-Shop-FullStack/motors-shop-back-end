import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";

export const userRoutes = Router();

userRoutes.use("/register", createUserController);
