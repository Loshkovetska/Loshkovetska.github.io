"use client";
import { useCallback, useMemo, useState } from "react";

import { useData } from "@/lib/hooks";

export const usePagination = (queryKey: string) => {
  const [page, setPage] = useState(1);

  const { data } = useData({ apiName: "moviesApi", queryKey: queryKey });

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
