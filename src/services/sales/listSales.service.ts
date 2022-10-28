import { prisma } from "../../app";
import { ISalesCreate, ISalesResponse } from "../../interfaces/sales.interface";

export const listSalesService = async (
  data: ISalesCreate
): Promise<ISalesResponse> => {
  const newSale = await prisma.sales.create({
    data: {
      title: data.title,
      year: data.year,
      mileage: data.mileage,
      price: data.price,
      description: data.description,
      type: data.type == "SELLER" ? "SELLER" : "BUYER",
      published: data.published ? true : false,
      userId: data.user.id,
    },
    include: {
      user: true,
    },
  });

  return newSale;
};
