import { IUserCreateResponse } from "./users.interface";

export interface ISalesCreate {
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  type: string;
  published: boolean;
  user: {
    id: string;
  };
}

export interface ISalesResponse {
  id: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  type: string;
  published: boolean;
  created_at: Date;
  updated_at: Date;
  user: IUserCreateResponse;
}
