import * as express from "express";
import { IUserRequest } from "../../src/interfaces/users.interface";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        type: string;
      };
    }
  }
}
