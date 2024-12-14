import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { VALIDATE_TAGS } from "@/lib/constants";
import { ProductType } from "@/types";
import { OrderRequestType } from "@/types/order";

export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  tagTypes: [VALIDATE_TAGS.Products],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
  }),
  endpoints: (builder) => ({
    confirmOrder: builder.mutation<OrderRequestType, string>({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body,
      }),
    }),
    products: builder.query<ProductType[], void>({
      query: () => "products",
      providesTags: [VALIDATE_TAGS.Products],
    }),
  }),
});

export const { useConfirmOrderMutation, useProductsQuery } = checkoutApi;
