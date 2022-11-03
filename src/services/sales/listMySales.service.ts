import { prisma } from "../../app";
import { iSalesResponse } from "../../interfaces/sales.interface";

export const listMySalesService = async (
  id: string
): Promise<iSalesResponse[]> => {
  const sales = await prisma.sales.findMany({
    where: {
      userId: id,
    },
  });

  return sales;
};
