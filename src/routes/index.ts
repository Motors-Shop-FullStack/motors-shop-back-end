import { Router } from "express";
import { salesRoutes } from "./sales.routes";
import { userRoutes } from "./user.routes";

export const routes = Router();

routes.use("/sales", salesRoutes);
routes.use("/user", userRoutes);
