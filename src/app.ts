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

// app.use(express.urlencoded({ extended: true }));

// app.use(routes);
appRoute(app);

app.use(handleAppErrorMiddeware);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   if (err instanceof AppError) {
//     res.status(err.statusCode).send({ message: err.message });
//   }
//   console.log(err);
//   return res.status(500).send({ message: "Internal server Error" });
// });

const port: number = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
