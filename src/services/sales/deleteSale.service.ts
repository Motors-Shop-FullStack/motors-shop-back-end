import { prisma } from "../../app";
import { AppError } from "../../errors/appError";

export const deleteSaleService = async (id_sale: string, id_user: string) => {
  const sale = await prisma.sales.findUnique({
    where: { id: id_sale },
  });

  if (!sale) {
    throw new AppError("Sale not found");
  }
  console.log(sale.userId, id_user);
  if (sale.userId != id_user) {
    throw new AppError("You cannot make this action", 403);
  }

  await prisma.sales.delete({
    where: { id: sale.id },
  });
  return;
};
