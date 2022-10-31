export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  type: boolean;
  id: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  cpf: number;
  phone?: number;
  birthdate?: Date;
  description?: string;
  account_type: string;
  address?: string;
}

export interface IUserCreateResponse {
  id: string;
  name: string;
  email: string;
  cpf: number;
  account_type: string;
  created_at: Date;
  updated_at: Date;
}
