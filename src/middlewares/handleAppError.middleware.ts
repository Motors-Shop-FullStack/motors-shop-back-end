import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const handleAppErrorMiddeware = (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error.",
    error: error.message,
  });
};

export default handleAppErrorMiddeware;
