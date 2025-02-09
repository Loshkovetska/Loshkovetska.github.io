import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ContactUsRequestType } from "@/types";

export const generalApi = createApi({
  reducerPath: "generalApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
  }),
  endpoints: (builder) => ({
    contactUs: builder.mutation<void, ContactUsRequestType>({
      query: (body) => ({
        url: "contact",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation<void, FormData>({
      query: (body) => ({
        url: "auth/sign-up",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useContactUsMutation, useSignUpMutation } = generalApi;
