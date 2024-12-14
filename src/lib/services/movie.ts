import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { QUERY_TAGS } from "@/lib/constants";
import { GenreResultType, SearchResultType } from "@/types";
import { ReviewsResponseType } from "@/types/review";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  tagTypes: [
    QUERY_TAGS.SearchMovie,
    QUERY_TAGS.NowRealesedMovies,
    QUERY_TAGS.FutureReleasedMovies,
    QUERY_TAGS.MovieGenres,
    QUERY_TAGS.MoviesPerPeriod,
    QUERY_TAGS.Reviews,
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders(headers) {
      headers.append(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_TMBD_TOKEN}`
      );
    },
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<SearchResultType, string>({
      query: (query: string) =>
        `search/movie?${query}&include_adult=true&sort_by=popularity.desc`,
      providesTags: [QUERY_TAGS.SearchMovie],
    }),
    releasedMovies: builder.query<SearchResultType, boolean>({
      query: (isNext: boolean = true) => {
        return `movie/${isNext ? "upcoming" : "now_playing"}?include_adult=true&language=en-US&page=1`;
      },
      providesTags: (res, e, arg) => [
        arg ? QUERY_TAGS.FutureReleasedMovies : QUERY_TAGS.NowRealesedMovies,
      ],
    }),
    movieGenres: builder.query<GenreResultType, void>({
      query: () => `genre/movie/list?language=en`,
      providesTags: [QUERY_TAGS.MovieGenres],
    }),
    moviesPerPeriod: builder.query<
      SearchResultType,
      { startDate: string; endDate: string }
    >({
      query: (args) =>
        `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${args.startDate}&primary_release_date.lte=${args.endDate}&sort_by=popularity.desc`,
      providesTags: [QUERY_TAGS.MoviesPerPeriod],
    }),
    movieReviews: builder.query<
      ReviewsResponseType,
      { id: number; page: number }
    >({
      query: (args) => `movie/${args.id}/reviews?page=${args.page}`,
      providesTags: [QUERY_TAGS.Reviews],
    }),
  }),
});

export const {
  useSearchMoviesQuery,
  useReleasedMoviesQuery,
  useMovieGenresQuery,
  useMoviesPerPeriodQuery,
  useMovieReviewsQuery,
} = moviesApi;
