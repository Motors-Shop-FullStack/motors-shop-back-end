//import { ISalesCreate } from "../../interfaces/sales.interface" ;
import { randomUUID } from "crypto";
import { prisma } from "../../app";

export const createSaleService = async (
  data: ISalesCreate
): Promise<ISalesResponse> => {
  const newSale = await prisma.sales.create({
    data: {
      id: randomUUID(),
      title: data.title,
      year: data.year,
      mileage: data.mileage,
      price: data.price,
      description: data.description,
      type: data.type,
      published: data.published,
      created_at: new Date(),
      updated_at: new Date(),
      userId: data.user.id,
    },
    include: {
      user: true,
    },
  });

  return newSale;
};
