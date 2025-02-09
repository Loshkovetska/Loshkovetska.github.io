import dayjs from "dayjs";
import Link from "next/link";
import { FaEllipsisH } from "react-icons/fa";

import GenresList from "@/components/common/genres-list";
import { useGenres } from "@/lib/hooks";
import { SearchItemResultType } from "@/types";

export default function BannerItem(item: SearchItemResultType) {
  const { getGenresList } = useGenres(true);

  return (
    <div
      className="relative flex size-full items-center bg-black/80 bg-cover bg-top bg-blend-multiply"
      style={{
        backgroundImage: `url('${process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + item.poster_path}')`,
      }}
    >
      <div className="flex flex-col gap-6 pl-8 max-md:max-w-[375px] md:w-[668px]">
        <span className="self-start rounded-[50px] border border-white/80 px-4 py-2 text-center text-sm font-medium text-white">
          {item.adult ? "16+" : "12+"}
        </span>
        <div className="text-3xl font-bold uppercase text-white">
          {item.original_title}
        </div>
        <GenresList genres={getGenresList(item.genre_ids || []) as []} />
        <div className="self-start rounded-[50px] bg-error/80 px-4 py-2 text-center text-sm font-medium text-white/80 md:text-md">
          Release Date: {dayjs(item.release_date).format("DD MMM YYYY")}
        </div>
        <div className="mt-10 flex justify-center gap-6 self-start">
          <Link
            href={`/details/${item.id}`}
            className="group flex items-center gap-2 font-light text-white hover:underline"
          >
            <FaEllipsisH className="fill-white/80 group-hover:fill-white" />
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
