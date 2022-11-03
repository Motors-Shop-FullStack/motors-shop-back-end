import { Router } from "express";
import {
  createSalesController,
  listMySalesController,
  listSaleByIdController,
  listSalesController,
} from "../controllers/sales.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const routes = Router();
export const salesRoutes = () => {
  routes.get("", listSalesController);
  routes.post("", ensureAuthMiddleware, createSalesController);
  routes.get("/my-sales", ensureAuthMiddleware, listMySalesController);
  routes.get("/:id", listSaleByIdController);
  return routes;
};
