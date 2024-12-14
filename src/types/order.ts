import { ProductType } from "@/types/product";

type OrderStoreItem = ProductType & {
  amount: number;
  size?: "S" | "M" | "L";
};

type OrderType = {
  movie_id: number;
  seats: { id: number[]; type: string }[];
  store: OrderStoreItem[];
};

type OrderRequestType = {
  email: string;
  name: string;
  tel: string;
} & OrderType;

export type { OrderRequestType, OrderType };
