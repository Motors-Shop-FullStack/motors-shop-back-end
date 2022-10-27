interface ISalesCreate {
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  type: string;
  published: string;
  user: {
    id: string;
  };
}

interface ISalesResponse {
  id: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  type: string;
  published: string;
  created_at: Date;
  updated_at: Date;
  user: IUserCreateResponse;
}
