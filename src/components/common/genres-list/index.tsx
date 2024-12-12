import { cn } from "@/lib/utils";

type GenresListPropType = {
  genres: string[];
  labelClassName?: string;
};

export default function GenresList({
  genres,
  labelClassName,
}: GenresListPropType) {
  return (
    <div className="flex max-w-screen-sm flex-wrap items-center gap-2">
      <span
        className={cn("text-[20px] font-light text-white/90", labelClassName)}
      >
        Genre:{" "}
      </span>
      {genres?.map((genre) => (
        <span
          key={genre}
          className="flex rounded-full border border-white/20 px-5 py-1 text-[12px] font-medium text-white"
        >
          {genre}
        </span>
      ))}
    </div>
  );
}
