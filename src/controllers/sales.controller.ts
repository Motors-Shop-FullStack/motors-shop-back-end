import { Request, Response } from "express";
import { createSaleService } from "../services/sales/createSale.service";
import { listSalesService } from "../services/sales/listSales.service";
import { AppError } from "../errors/appError";

export const createSalesController = async (req: Request, res: Response) => {
  const data = req.body;

  const sale = await createSaleService(data);
  return res.status(201).send(sale);
};

export const listSalesController = async (req: Request, res: Response) => {
  const idUser = req.user.id;
  const typeUser = req.user.type;
  const sales = await listSalesService(idUser, typeUser);
  return res.status(200).send(sales);
};

export const listSaleByIdController = async (req: Request, res: Response) => {
  const idUser = req.user.id;
  const typeUser = req.user.type;
  const id = req.params.id;
  const sales = await listSalesService(id, idUser, typeUser);
  return res.status(200).send(sales);
};
