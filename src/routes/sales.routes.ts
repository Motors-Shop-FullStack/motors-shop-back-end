import { Router } from "express";
import {
  createSalesController,
  listSalesController,
} from "../controllers/sales.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const routes = Router();
export const salesRoutes = () => {
  routes.get("", listSalesController);
  routes.post("", ensureAuthMiddleware, createSalesController);

  return routes;
};
