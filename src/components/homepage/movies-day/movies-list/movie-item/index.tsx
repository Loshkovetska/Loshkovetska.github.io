import Link from "next/link";

import RateBlock from "@/components/common/rate-block";
import { SearchItemResultType } from "@/types";

export default function MovieItem({
  vote_average,
  genre,
  title,
  poster_path,
  id,
}: SearchItemResultType & { genre: string }) {
  return (
    <Link
      href={`/details/${id}`}
      className="relative flex h-[67vw] w-full flex-col md:max-lg:h-[45vw] lg:h-[345px]"
      style={{
        background: `linear-gradient(180deg, rgba(126, 125, 125, 0.3) 0%, rgba(112, 111, 111, 0.36875) 11.46%, rgba(0, 0, 0, 0.9) 100%),url(${process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + poster_path})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 px-5 pb-5">
        <h3 className="text-[20px] font-bold text-white">{title}</h3>
        <span className="font-regular text-sm text-white/80">{genre}</span>
        <RateBlock vote_average={vote_average} />
      </div>
    </Link>
  );
}
