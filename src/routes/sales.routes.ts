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
import verifyIsSaleOwner from "../middlewares/verifyIsSaleOwner.middleware";

const routes = Router();

export const salesRoutes = () => {
  routes.get("", listSalesController);
  routes.post("", ensureAuthMiddleware, createSalesController);
  routes.get("/my-sales", ensureAuthMiddleware, listMySalesController);
  routes.get("/:id", listSaleByIdController);
  routes.patch(
    "/:id",
    ensureAuthMiddleware,
    verifyIsSaleOwner,
    updateSaleController
  );
  routes.delete(
    "/:id",
    ensureAuthMiddleware,
    verifyIsSaleOwner,
    deleteSaleController
  );
  return routes;
};
