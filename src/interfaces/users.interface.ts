export interface IUserRequest {
  name: string;
  email: string;
  password: string;
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
  address: iAddressCreate;
}

export interface iUserCreateResponse {
  id: string;
  name: string;
  email: string;
  cpf?: number;
  account_type: string;
  created_at: Date;
  updated_at: Date;
  address?: iAddressCreate;
}

export interface iAddressCreate {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface ISchemaUser {
  name: string;
  cpf: number;
  password: string;
  address: iAddressCreate;
}
