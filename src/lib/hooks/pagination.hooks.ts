"use client";
import { useCallback, useMemo, useState } from "react";

import { useAppSelector } from "@/lib/hooks";
import { ReviewsResponseType, SearchResultType } from "@/types";

export const usePagination = (queryKey: string) => {
  const state = useAppSelector((state) => state.moviesApi.queries);
  const [page, setPage] = useState(1);

  const data = useMemo(
    () =>
      Object.values(state).find((s) => s?.endpointName === queryKey)?.data as
        | SearchResultType
        | ReviewsResponseType,
    [state, queryKey]
  );

  const { canFetchNext, canFetchPrevious } = useMemo(() => {
    if (!data) return { canFetchNext: false, canFetchPrevious: false };
    return {
      canFetchPrevious: page > 1,
      canFetchNext: page < data?.total_pages,
    };
  }, [data, page]);

  const handlePageChange = useCallback((type: "next" | "prev") => {
    setPage((prev) => prev + (type === "next" ? 1 : -1));
  }, []);

  return { page, canFetchNext, canFetchPrevious, handlePageChange, setPage };
};
