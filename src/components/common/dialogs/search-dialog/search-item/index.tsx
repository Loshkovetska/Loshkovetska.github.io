import Image from "next/image";

import { SearchItemResult } from "@/types";

export default function SearchItem({ poster_path, title }: SearchItemResult) {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-sm bg-dark/80 opacity-50 transition-all hover:opacity-100 max-md:h-[56vw]">
      {poster_path ? (
        <Image
          src={"https://image.tmdb.org/t/p/w500/" + poster_path}
          fill
          alt={title}
          className="object-cover object-center"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex size-full items-center justify-center">
          <span className="text-lg font-bold text-white">Image not found</span>
        </div>
      )}
      <span className="absolute bottom-5 line-clamp-2 w-full px-2 text-center text-white">
        {title}
      </span>
    </div>
  );
}
