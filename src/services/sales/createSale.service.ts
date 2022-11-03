import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import { ISalesCreate, ISalesResponse } from "../../interfaces/sales.interface";

export const createSaleService = async (
  data: ISalesCreate,
  userId: string
): Promise<ISalesResponse> => {
  const newSale = await prisma.sales.create({
    data: {
      title: data.title,
      year: data.year,
      mileage: data.mileage,
      price: data.price,
      description: data.description,
      published: data.published,
      image_cover: data.image_cover,
      userId: userId,
    },
    include: {
      user: true,
    },
  });

  for (let i = 0; i < data.images.length; i++) {
    await prisma.images.create({
      data: {
        image_link: data.images[i],
        sales_id: newSale.id,
      },
    });
  }

  const sale = await prisma.sales.findUnique({
    where: {
      id: newSale.id,
    },
    include: {
      user: true,
      images: true,
    },
  });

  if (!sale) {
    throw new AppError("Sale is not created", 400);
  }

  return sale;
};
