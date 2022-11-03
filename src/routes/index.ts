import { Express } from "express";

import { userRoutes } from "./user.routes";

export const appRoute = (app: Express) => {
  app.use("/users", userRoutes());
};
