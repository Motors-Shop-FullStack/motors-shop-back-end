import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import { iSalesResponse } from "../../interfaces/sales.interface";

export const listSalesByIdService = async (
  id: string
): Promise<iSalesResponse> => {
  const sale = await prisma.sales.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
      images: true,
    },
  });

  if (!sale) {
    throw new AppError("Produto não encontrado", 404);
  }
  const User = sale.user;

  const user_info = {
    name: User.name,
    description: User.description,
    phone: User.phone,
    email: User.email,
  };

  const { user, ...response } = sale;
  return { ...response, user_info };
};
