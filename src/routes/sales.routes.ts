import { Router } from "express";
import { listSalesController } from "../controllers/sales.controller";

const routes = Router();
export const salesRoutes = () => {
  routes.get("", listSalesController);

  return routes;
};
