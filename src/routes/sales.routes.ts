import { Router } from "express";
import { createSalesController } from "../controllers/sales.controller";

export const salesRoutes = Router();

salesRoutes.use("/", createSalesController);
