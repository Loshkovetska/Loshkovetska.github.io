import Link from "next/link";
import { useCallback } from "react";
import { FaStar } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { SearchItemResultType } from "@/types";

export default function MovieItem({
  vote_average,
  genre,
  title,
  poster_path,
  id,
}: SearchItemResultType & { genre: string }) {
  const getRate = useCallback(() => {
    const convertTo5 = Math.floor(vote_average / 2);
    const stars = Array(5)
      .fill("star")
      .map((_, ind) => (
        <FaStar
          key={ind}
          className={cn(
            "size-3",
            ind + 1 > convertTo5 ? "fill:white" : "fill:white/50"
          )}
        />
      ));

    return stars;
  }, [vote_average]);

  return (
    <Link
      href={`/details/${id}`}
      className="relative flex h-[345px] w-full flex-col"
      style={{
        background: `linear-gradient(180deg, rgba(126, 125, 125, 0.3) 0%, rgba(112, 111, 111, 0.36875) 11.46%, rgba(0, 0, 0, 0.9) 100%),url(${process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + poster_path})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 px-5 pb-5">
        <h3 className="text-[20px] font-bold text-white">{title}</h3>
        <span className="font-regular text-sm text-white/80">{genre}</span>
        <div className="flex items-center">{getRate()}</div>
      </div>
    </Link>
  );
}
