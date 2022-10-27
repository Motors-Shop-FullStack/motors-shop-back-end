interface IUserLogin {
  email: string;
  password: string;
}

interface IUserCreate {
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

interface IUserCreateResponse {
  id: string;
  name: string;
  email: string;
  cpf: number;
  account_type: string;
  created_at: Date;
  updated_at: Date;
}
