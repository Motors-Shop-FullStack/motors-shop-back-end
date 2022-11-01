import { Prisma } from "@prisma/client";

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  account_type: boolean;
  id: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

type ACCOUNT = "SELLER" | "BUYER";

export interface iUserCreate {
  name: string;
  email: string;
  password: string;
  cpf: number;
  phone?: number;
  birthdate?: Date;
  description?: string;
  account_type: ACCOUNT;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
}

export interface iUserCreateResponse {
  id: string;
  name: string;
  email: string;
  cpf: number;
  phone?: number | null;
  birthdate?: Date | null;
  description?: string | null;
  account_type: string;
  created_at: Date;
  updated_at: Date;
  address?: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
}

export interface IAddressCreate {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}
