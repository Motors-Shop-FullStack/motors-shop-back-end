import { Express } from "express";
import { salesRoutes } from "./sales.routes";

import { userRoutes } from "./user.routes";

export const appRoute = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/sales/", salesRoutes());
};
