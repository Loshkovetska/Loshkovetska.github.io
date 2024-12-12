import Image from "next/image";

import { SearchItemResultType } from "@/types";

export default function ShortMovieItem({
  poster_path,
  title,
}: Partial<SearchItemResultType>) {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-sm bg-dark/80 opacity-50 transition-all hover:opacity-100 max-md:h-[56vw]">
      {poster_path ? (
        <Image
          src={process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + poster_path}
          fill
          alt={title || ""}
          className="object-cover object-center"
          loading="lazy"
          sizes="50vw, 33vw, 20vw"
        />
      ) : (
        <div className="absolute inset-0 flex size-full items-center justify-center">
          <span className="text-lg font-bold text-white">Image not found</span>
        </div>
      )}
      <span className="absolute bottom-0 line-clamp-2 w-full bg-dark/60 px-2 text-center font-medium text-white">
        {title}
      </span>
    </div>
  );
}
