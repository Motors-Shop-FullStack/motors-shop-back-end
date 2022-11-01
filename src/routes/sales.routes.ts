// import { Router } from "express";
// import { createSalesController } from "../controllers/sales.controller";
// import { listSalesController } from "../controllers/sales.controller";
// //import { listMySalesController } from "../controllers/sales.controller";
// import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
// import { listSaleByIdController } from "../controllers/sales.controller";

// export const salesRoutes = Router();

// salesRoutes.use("/", createSalesController);
// salesRoutes.use("/", listSalesController);
// //salesRoutes.use("/myproducts", ensureAuthMiddleware, listMySalesController);
// salesRoutes.use("/:id", listSaleByIdController);

import { Router } from "express";
import {
  //   createSalesController,
  listSalesController,
} from "../controllers/sales.controller";
//import { listMySalesController } from "../controllers/sales.controller";
// import { listSaleByIdController } from "../controllers/sales.controller";
const routes = Router();
export const salesRoutes = () => {
  //   routes.post("", createSalesController);
  routes.get("", listSalesController);
  //salesRoutes.use("/myproducts", ensureAuthMiddleware, listMySalesController);
  //   routes.get("/:id", listSaleByIdController);
  return routes;
};
