import { Router } from "express";
import {
  createSalesController,
  deleteSaleController,
  listMySalesController,
  listSaleByIdController,
  listSalesController,
  updateSaleController,
} from "../controllers/sales.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const routes = Router();

export const salesRoutes = () => {
  routes.get("", listSalesController);
  routes.post("", ensureAuthMiddleware, createSalesController);
  routes.get("/my-sales", ensureAuthMiddleware, listMySalesController);
  routes.get("/:id", listSaleByIdController);
  routes.patch("/:id", ensureAuthMiddleware, updateSaleController);
  routes.delete("/:id", ensureAuthMiddleware, deleteSaleController);
  return routes;
};
