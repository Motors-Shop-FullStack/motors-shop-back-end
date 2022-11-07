import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listOneUserController,
  listUsersController,
  loginUserController,
  updateAddressUserController,
  updateUserController,
} from "../controllers/users.controllers";
import schemaValidationMiddleware from "../middlewares/verifySchema.middleware";
import { UserCreateSchema, UserLoginSchema } from "../schemas/user";

const routes = Router();

export const userRoutes = () => {
  routes.get("", listUsersController);
  routes.get("/:id/", listOneUserController);
  routes.post(
    "/register/",
    schemaValidationMiddleware(UserCreateSchema),
    createUserController
  );
  routes.patch("/:id/", updateUserController);
  routes.patch("/address/:id/", updateAddressUserController);
  routes.delete("/:id/", deleteUserController);

  routes.post(
    "/login/",
    schemaValidationMiddleware(UserLoginSchema),
    loginUserController
  );
  return routes;
};
