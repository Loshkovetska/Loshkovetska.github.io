import { useCallback } from "react";
import { FaStar } from "react-icons/fa";

import { cn } from "@/lib/utils";

type RateBlockPropType = {
  totalReviews?: number;
  vote_average: number;
  starClassName?: string;
  totalReviewVisible?: boolean;
  titleClassName?: string;
};

export default function RateBlock({
  vote_average,
  starClassName,
  totalReviews,
  totalReviewVisible,
  titleClassName,
}: RateBlockPropType) {
  const getRate = useCallback(() => {
    const convertTo5 = Math.floor(vote_average / 2);
    const stars = Array(5)
      .fill("star")
      .map((_, ind) => (
        <FaStar
          key={ind}
          className={cn(
            "size-3 mr-1",
            ind + 1 <= convertTo5 ? "fill-white" : "fill-white/50",
            starClassName
          )}
        />
      ));

    return stars;
  }, [vote_average, starClassName]);

  return (
    <div className="flex items-center">
      {totalReviewVisible && (
        <span
          className={cn("mr-3 text-xl font-bold text-white", titleClassName)}
        >
          {totalReviews}
        </span>
      )}
      {getRate()}
    </div>
  );
}
