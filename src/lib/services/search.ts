import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dayjs from "dayjs";

import { GenreResultType, SearchResultType } from "@/types";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
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
    upcomingMovies: builder.query<SearchResultType, boolean>({
      query: (isNext: boolean = true) => {
        const dateQuery = isNext
          ? `release_date.gte=${dayjs().format("YYYY-MM-DD")}`
          : `release_date.lte=${dayjs().format("YYYY-MM-DD")}&release_date.gte=${dayjs().format("YYYY-MM-DD")}`;
        return `discover/movie?include_video=true&language=en-US&page=1&${dateQuery}&sort_by=popularity.desc`;
      },
    }),
    movieGenres: builder.query<GenreResultType, undefined>({
      query: () => `genre/movie/list?language=en`,
    }),
  }),
});

export const {
  useSearchMoviesQuery,
  useUpcomingMoviesQuery,
  useMovieGenresQuery,
} = moviesApi;
