import { GenreItemType } from "@/types/genre";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  genres: GenreItemType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string[];
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguageType[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: VideoResponseType;
  vote_average: number;
  vote_count: number;
};

type ProductionCompanyType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type VideoResponseType = {
  results: VideoType[];
};

type VideoType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

export type {
  MovieType,
  ProductionCompanyType,
  ProductionCountryType,
  SpokenLanguageType,
  VideoResponseType,
  VideoType,
};
