import Image from "next/image";

import { SearchItemResult } from "@/types";

export default function SearchItem({ Title, Poster }: SearchItemResult) {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-sm bg-dark/80 opacity-50 transition-all hover:opacity-100 max-md:h-[56vw]">
      {Poster && Poster !== "N/A" ? (
        <Image
          src={Poster}
          fill
          alt={Title}
          className="object-cover object-center"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex size-full items-center justify-center">
          <span className="text-lg font-bold text-white">Image not found</span>
        </div>
      )}
      <span className="absolute bottom-5 block w-full text-center text-white">
        {Title}
      </span>
    </div>
  );
}
