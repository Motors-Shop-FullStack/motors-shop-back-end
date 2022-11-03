import { prisma } from "../../app";

export const deleteSaleService = async (id_sale: string) => {
  await prisma.sales.delete({
    where: { id: id_sale },
  });
  return;
};
