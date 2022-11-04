import { prisma } from "../../app";
import { iSalesResponse } from "../../interfaces/sales.interface";

export const listSalesService = async (): Promise<iSalesResponse[]> => {
  const sales = await prisma.sales.findMany({
    where: {
      published: true,
    },
    include: {
      user: true,
    },
  });

  const response: iSalesResponse[] = [];

  sales.forEach((sale) => {
    const { name } = sale.user;
    const { user, ...rest } = sale;

    response.push({ ...rest, user_info: { name } });
  });
  return response;
};
