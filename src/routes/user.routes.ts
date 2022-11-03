import { Router } from "express";
import {
  createUserController,
  listUsersController,
  loginUserController,
} from "../controllers/users.controllers";
import schemaValidationMiddleware from "../middlewares/verifySchema.middleware";
import { UserCreateSchema, UserLoginSchema } from "../schemas/user";

const routes = Router();

export const userRoutes = () => {
  routes.get("", listUsersController);

  routes.post(
    "/register/",
    schemaValidationMiddleware(UserCreateSchema),
    createUserController
  );

  routes.post(
    "/login/",
    schemaValidationMiddleware(UserLoginSchema),
    loginUserController
  );
  return routes;
};
