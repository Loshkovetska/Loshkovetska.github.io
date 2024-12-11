import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SearchResultType } from "@/types";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders(headers, api) {
      headers.append(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_TMBD_TOKEN}`
      );
    },
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<SearchResultType, string>({
      query: (query: string) => `search/movie?${query}&sort_by=popularity.desc`,
    }),
  }),
});

export const { useSearchMoviesQuery } = searchApi;
