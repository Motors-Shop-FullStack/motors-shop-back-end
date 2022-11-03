import { Router } from "express";
import {
  createSalesController,
  deleteSaleController,
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
  routes.delete("/:id", ensureAuthMiddleware, deleteSaleController);
  return routes;
};
