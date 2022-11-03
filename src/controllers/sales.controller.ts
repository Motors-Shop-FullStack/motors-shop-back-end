import { Request, Response } from "express";
import { createSaleService } from "../services/sales/createSale.service";
import { deleteSaleService } from "../services/sales/deleteSale.service";
import { listMySalesService } from "../services/sales/listMySales.service";
import { listSalesByIdService } from "../services/sales/listSaleById.service";
import { listSalesService } from "../services/sales/listSales.service";

export const createSalesController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.user;
  const sale = await createSaleService(data, id);
  return res.status(201).json(sale);
};

export const listSalesController = async (req: Request, res: Response) => {
  const sales = await listSalesService();
  return res.status(200).json(sales);
};

export const listMySalesController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const sales = await listMySalesService(id);
  return res.status(200).json(sales);
};

export const listSaleByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const sale = await listSalesByIdService(id);
  return res.status(200).json(sale);
};

export const deleteSaleController = async (req: Request, res: Response) => {
  const { id: sale_id } = req.params;
  const { id: user_id } = req.user;
  await deleteSaleService(sale_id, user_id);
  return res.status(204).json();
};
