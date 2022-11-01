import { Express } from "express";
import { salesRoutes } from "./sales.routes";
import { userRoutes } from "./user.routes";

export const appRoute = (app: Express) => {
  app.use("/sales", salesRoutes());
  app.use("/users", userRoutes());
};
