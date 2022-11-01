import { prisma } from "../../app";
import { ISales } from "../../interfaces/sales.interface";

export const listMySalesService = async (id: string): Promise<ISales[]> => {
  const sales = await prisma.sales.findMany({
    where: {
      userId: id,
    },
  });

  return sales;
};
