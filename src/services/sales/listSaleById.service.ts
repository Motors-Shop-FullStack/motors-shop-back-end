import { prisma } from "../../app";
import { ISalesCreate, ISalesResponse } from "../../interfaces/sales.interface";
import { AppError } from "../../errors/appError";

export const listSalesService = async (id: string): Promise<ISalesResponse> => {
  const sale = await prisma.sales.findUnique({
    where: {
      id: id,
    },
  });

  if (!sale) {
    throw new AppError("Produto não encontrado", 404);
  }

  return sale;
};
