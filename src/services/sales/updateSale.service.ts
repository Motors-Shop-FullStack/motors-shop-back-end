import { prisma } from "../../app";

export const updateSaleService = async (id_sale: string, data: {}) => {
  await prisma.sales.update({
    where: { id: id_sale },
    data: data,
  });
  return;
};
