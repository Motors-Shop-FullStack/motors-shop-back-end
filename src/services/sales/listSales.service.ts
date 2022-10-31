import { prisma } from "../../app";
import { ISalesCreate, ISalesResponse } from "../../interfaces/sales.interface";
import { AppError } from "../../errors/appError";

export const listSalesService = async (idUser: string): Promise<[]> => {
  const sales = await prisma.sales.findMany({
    //conect - como era o relations
  });

  if (!sales) {
    throw new AppError("Produto não encontrado", 404);
  }

  //pegar as Sales do schema sales

  // serviceMyproduct
  //vou pegar o sales , do array do usuario, fazendo o get no usuario
  // verificar se preciso fazer a relação ou só passar o campo.

  return sales;
};
