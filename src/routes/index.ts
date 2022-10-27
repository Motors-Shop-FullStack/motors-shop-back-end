import { Router } from "express";
import { salesRoutes } from "./sales.routes";

export const routes = Router();

routes.use("/sales", salesRoutes);
