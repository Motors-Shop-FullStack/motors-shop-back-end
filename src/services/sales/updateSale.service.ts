import { prisma } from "../../app";
import { AppError } from "../../errors/appError";

export const updateSaleService = async (
  id_sale: string,
  id_user: string,
  data: {}
) => {
  const sale = await prisma.sales.findUnique({
    where: { id: id_sale },
  });

  if (!sale) {
    throw new AppError("Sale not found");
  }

  if (sale.userId != id_user) {
    throw new AppError("You cannot make this action", 403);
  }

  await prisma.sales.update({
    where: { id: sale.id },
    data: data,
  });
  return;
};
