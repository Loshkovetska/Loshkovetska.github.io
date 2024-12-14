import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { QUERY_TAGS } from "@/lib/constants";
import { ProductType } from "@/types";
import { OrderRequestType } from "@/types/order";

export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  tagTypes: [QUERY_TAGS.Products],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
  }),
  endpoints: (builder) => ({
    confirmOrder: builder.mutation<void, OrderRequestType>({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body,
      }),
    }),
    products: builder.query<ProductType[], void>({
      query: () => "products",
      providesTags: [QUERY_TAGS.Products],
    }),
  }),
});

export const { useConfirmOrderMutation, useProductsQuery } = checkoutApi;
