import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";

const routes = Router();

export const userRoutes = () => {
  routes.post("/register/", createUserController);
  //salesRoutes.use("/myproducts", ensureAuthMiddleware, listMySalesController);
  //   routes.get("/:id", listSaleByIdController);
  return routes;
};

// userRoutes.use("/register", createUserController);
// userRoutes.use("/login", loginUserController);
