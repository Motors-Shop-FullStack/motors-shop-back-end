import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { AppError } from "./errors/appError";
import { routes } from "./routes";
import { PrismaClient } from "@prisma/client";
import { salesRoutes } from "./routes/sales.routes";

export const prisma = new PrismaClient();

export const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).send({ message: err.message });
  }
  console.log(err);
  return res.status(500).send({ message: "Internal server Error" });
});

const port: number = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
