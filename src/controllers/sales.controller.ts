import { Request, Response, NextFunction } from "express";
import { createSaleService } from "../services/sales/createSale.service";
import { listSalesService } from "../services/sales/listSales.service";

export const createSalesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  try {
    const sale = await createSaleService(data);
    return res.status(201).send(sale);
  } catch (e) {
    next(e);
  }
};

export const listSalesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  try {
    const sales = await listSalesService(data);
    return res.status(200).send(sales);
  } catch (e) {
    next(e);
  }
};
