import { iUserCreateResponse } from "./users.interface";

export interface ISalesCreate {
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  image_cover: string;
  images: string[];
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
  image_cover: string;
  images?: IImages[];
  published: boolean;
  created_at: Date;
  updated_at: Date;
  user: iUserCreateResponse;
}

export interface IImages {
  id: string;
  image_link: string;
  sales_id: string;
}

export interface ISales {
  id: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  image_cover: string;
  images?: IImages[];
  published: boolean;
  created_at: Date;
  updated_at: Date;
  user?: iUserCreateResponse;
}
