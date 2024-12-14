import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { VALIDATE_TAGS } from "@/lib/constants";
import { GenreResultType, SearchResultType } from "@/types";
import { ReviewsResponseType } from "@/types/review";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  tagTypes: [
    VALIDATE_TAGS.SearchMovie,
    VALIDATE_TAGS.NowRealesedMovies,
    VALIDATE_TAGS.FutureReleasedMovies,
    VALIDATE_TAGS.MovieGenres,
    VALIDATE_TAGS.MoviesPerPeriod,
    VALIDATE_TAGS.Reviews,
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
      providesTags: [VALIDATE_TAGS.SearchMovie],
    }),
    releasedMovies: builder.query<SearchResultType, boolean>({
      query: (isNext: boolean = true) => {
        return `movie/${isNext ? "upcoming" : "now_playing"}?include_adult=true&language=en-US&page=1`;
      },
      providesTags: (res, e, arg) => [
        arg
          ? VALIDATE_TAGS.FutureReleasedMovies
          : VALIDATE_TAGS.NowRealesedMovies,
      ],
    }),
    movieGenres: builder.query<GenreResultType, void>({
      query: () => `genre/movie/list?language=en`,
      providesTags: [VALIDATE_TAGS.MovieGenres],
    }),
    moviesPerPeriod: builder.query<
      SearchResultType,
      { startDate: string; endDate: string }
    >({
      query: (args) =>
        `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${args.startDate}&primary_release_date.lte=${args.endDate}&sort_by=popularity.desc`,
      providesTags: [VALIDATE_TAGS.MoviesPerPeriod],
    }),
    movieReviews: builder.query<
      ReviewsResponseType,
      { id: number; page: number }
    >({
      query: (args) => `movie/${args.id}/reviews?page=${args.page}`,
      providesTags: [VALIDATE_TAGS.Reviews],
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
