import * as express from "express";
import { IUserRequest } from "../../interfaces/users.interface";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        account_type: string;
      };
    }
  }
}
