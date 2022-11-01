import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";

const routes = Router();

export const userRoutes = () => {
  routes.post("/register/", createUserController);

  return routes;
};
