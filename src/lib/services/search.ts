import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SearchResultType } from "@/types";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<SearchResultType, string>({
      query: (query: string) =>
        `?apikey=${process.env.NEXT_PUBLIC_OMDAPI_KEY}&${query}`,
    }),
  }),
});

export const { useSearchMoviesQuery } = searchApi;
