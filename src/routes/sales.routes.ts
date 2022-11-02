import { Router } from "express";
import { createSalesController } from "../controllers/sales.controller";
import { listSalesController } from "../controllers/sales.controller";
import { listMySalesController } from "../controllers/sales.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { listSaleByIdController } from "../controllers/sales.controller";

export const salesRoutes = Router();

salesRoutes.use("/", createSalesController);
salesRoutes.use("/", listSalesController);
salesRoutes.use("/myproducts", ensureAuthMiddleware, listMySalesController);
salesRoutes.use("/:id", listSaleByIdController);
