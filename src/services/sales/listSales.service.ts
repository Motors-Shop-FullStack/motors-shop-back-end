import { prisma } from "../../app";
import { ISales } from "../../interfaces/sales.interface";

export const listSalesService = async (): Promise<ISales[]> => {
  const sales = await prisma.sales.findMany({
    where: {
      published: true,
    },
  });
  // findMany({
  //   where: {
  //     published: true,
  //   },
  //   include: {
  //     user: true,
  //   },
  // });

  return sales;
};
