export interface iSalesCreate {
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  image_cover: string;
  type: "Car" | "Motorcycle";
  images: string[];
  published: boolean;
}

export interface iSalesResponse {
  id: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  image_cover: string;
  images?: iImages[];
  published: boolean;
  created_at: Date;
  updated_at: Date;
  userId: string;
  user_info?: {
    name: string;
    description?: string | null;
    phone?: number | null;
    email?: string;
  };
}

export interface iImages {
  id: string;
  image_link: string;
  sales_id: string;
}
