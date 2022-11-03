import { Router } from "express";
import { listMySalesController, listSaleByIdController, listSalesController } from "../controllers/sales.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const routes = Router();
export const salesRoutes = () => {
  routes.get("", listSalesController);

salesRoutes.post("/", ensureAuthMiddleware, createSalesController);
salesRoutes.get("/", listSalesController);
salesRoutes.get("/myproducts", ensureAuthMiddleware, listMySalesController);
salesRoutes.get("/:id", listSaleByIdController);
