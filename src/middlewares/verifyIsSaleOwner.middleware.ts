import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors/appError";

const verifyIsSaleOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: sale_id } = req.params;
  const { id: user_id } = req.user;
  const sale = await prisma.sales.findUnique({
    where: { id: sale_id },
  });
  if (!sale) {
    throw new AppError("Sale not found");
  }

  if (sale.userId != user_id) {
    throw new AppError("You cannot make this action", 403);
  }
  next();
};
export default verifyIsSaleOwner;
