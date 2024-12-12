"use client";
import { useCallback, useMemo } from "react";

import { VALIDATE_TAGS } from "@/lib/constants";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import { GenreResultType } from "@/types";

export const useGenres = (listView: boolean = true) => {
  const state = useAppSelector((state) => state.moviesApi.queries);
  const genres = useMemo(
    () =>
      Object.values(state).find(
        (s) => s?.endpointName === VALIDATE_TAGS.MovieGenres
      )?.data as GenreResultType,
    [state]
  );

  const getGenresList = useCallback(
    (ids: number[]) => {
      const genresList = genres?.genres
        ?.filter((genre) => ids.includes(genre.id))
        ?.map((genre) => genre.name);
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
