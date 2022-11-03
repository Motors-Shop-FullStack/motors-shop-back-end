import { prisma } from "../../app";
import { ISalesResponse } from "../../interfaces/sales.interface";
import { AppError } from "../../errors/appError";

export const listSalesByIdService = async (
  id: string
): Promise<ISalesResponse> => {
  const sale = await prisma.sales.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });

  if (!sale) {
    throw new AppError("Produto não encontrado", 404);
  }

  return sale;
};
