import { prisma } from "../../app";
import { iSalesResponse } from "../../interfaces/sales.interface";

export const listSalesService = async (): Promise<iSalesResponse[]> => {
  const sales = await prisma.sales.findMany({
    where: {
      published: true,
    },
  });

  return sales;
};
