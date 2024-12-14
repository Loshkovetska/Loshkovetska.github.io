"use client";

import PaginationBlock from "@/components/common/pagination-block";
import DetailsBlock from "@/components/movie-details/details-block";
import ReviewItem from "@/components/movie-details/reviews/review-item";
import { QUERY_TAGS } from "@/lib/constants";
import { usePagination } from "@/lib/hooks";
import { useMovieReviewsQuery } from "@/lib/services";

const PER_PAGE = 20;

export default function Reviews({ id }: { id: number }) {
  const { page, canFetchNext, canFetchPrevious, handlePageChange } =
    usePagination(QUERY_TAGS.Reviews);

  const { data } = useMovieReviewsQuery({ id, page });

  if (!data?.total_results) return null;

  return (
    <DetailsBlock title={`Reviews (${data?.total_results || 0}) `}>
      {data?.results.map((review) => (
        <ReviewItem
          key={review.id}
          {...review}
        />
      ))}
      {Number(data?.total_results || 0) > PER_PAGE && (
        <PaginationBlock
          canFetchNext={canFetchNext}
          canFetchPrevious={canFetchPrevious}
          handlePageChange={handlePageChange}
        />
      )}
    </DetailsBlock>
  );
}
