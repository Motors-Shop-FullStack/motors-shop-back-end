import express from "express";
import cors from "cors";
import "express-async-errors";
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware";
import { appRoute } from "./routes";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

appRoute(app);

app.use(handleAppErrorMiddeware);

const port: number = 3000;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

export default app;
