"use client";
import { useCallback } from "react";

import { QUERY_TAGS } from "@/lib/constants";
import { useData } from "@/lib/hooks";
import { GenreResultType } from "@/types";

export const useGenres = (listView: boolean = true) => {
  const { data: genres }: { data: GenreResultType } = useData({
    apiName: "moviesApi",
    queryKey: QUERY_TAGS.MovieGenres,
  });

  const getGenresList = useCallback(
    (ids: number[]) => {
      const genresList =
        genres?.genres
          ?.filter((genre) => ids.includes(genre.id))
          ?.map((genre) => genre.name) || [];
      if (listView) {
        return genresList;
      }

      return genresList.join(" | ") || "";
    },
    [genres, listView]
  );

  return {
    getGenresList,
  };
};
