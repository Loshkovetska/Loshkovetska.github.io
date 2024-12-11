import dayjs from "dayjs";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

import { GenreResultType, SearchItemResultType } from "@/types";

type BannerItemPropType = {
  genres?: GenreResultType;
} & SearchItemResultType;

export default function BannerItem(props: BannerItemPropType) {
  const { genres, ...item } = props;

  const getGenresList = useCallback(
    (ids: number[]) => {
      return (
        genres?.genres
          ?.filter((genre) => ids.includes(genre.id))
          ?.map((genre) => genre.name) || []
      );
    },
    [genres]
  );
  return (
    <div
      className="relative flex size-full items-center bg-black/80 bg-cover bg-top bg-blend-multiply"
      style={{
        backgroundImage: `url('${process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + item.poster_path}')`,
      }}
    >
      <div className="flex max-w-[375px] flex-col gap-6 pl-8 md:w-[668px]">
        <span className="self-start rounded-[50px] border border-white/80 px-4 py-2 text-center text-sm font-medium text-white">
          {item.adult ? "16+" : "12+"}
        </span>
        <div className="text-3xl font-bold uppercase text-white">
          {item.original_title}
        </div>
        <div className="flex max-w-screen-sm flex-wrap items-center gap-2">
          <span className="text-[20px] font-light text-white/90">Genre: </span>
          {getGenresList(item.genre_ids)?.map((genre) => (
            <span
              key={genre}
              className="flex rounded-full border border-white/20 px-5 py-1 text-[12px] font-medium text-white"
            >
              {genre}
            </span>
          ))}
        </div>
        <div className="self-start rounded-[50px] bg-error/80 px-4 py-2 text-center text-sm font-medium text-white/80 md:text-md">
          Release Date: {dayjs(item.release_date).format("DD MMM YYYY")}
        </div>
        <div className="mt-10 flex justify-center gap-6 self-start">
          <Link
            href={`/details/${item.id}`}
            className="group flex items-center gap-2 font-light text-white hover:underline"
          >
            <MoreHorizontal className="fill-white/80 group-hover:fill-white" />
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
