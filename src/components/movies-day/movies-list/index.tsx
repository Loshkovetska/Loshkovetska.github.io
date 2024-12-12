import dayjs from "dayjs";

import MovieItem from "@/components/movies-day/movies-list/movie-item";
import { useGenres } from "@/lib/hooks/genre.hooks";
import { useMoviesPerPeriodQuery } from "@/lib/services";

type MoviesListPropType = {
  currentDate: Date;
  nextDate: Date;
};

export default function MoviesList({
  currentDate,
  nextDate,
}: MoviesListPropType) {
  const { getGenresList } = useGenres(false);

  const { data } = useMoviesPerPeriodQuery({
    startDate: dayjs(currentDate).format("YYYY-MM-DD"),
    endDate: dayjs(nextDate).format("YYYY-MM-DD"),
  });

  return (
    <div className="mx-auto w-full lg:w-[85%]">
      <h2 className="my-10 text-[20px] text-white/80 max-lg:pl-4">
        Movie screenings in {dayjs(currentDate).format("DD MMM YYYY")}
      </h2>
      <div className="grid w-full grid-cols-5 gap-4">
        {data?.results?.map((item) => (
          <MovieItem
            key={item.id}
            genre={getGenresList(item.genre_ids || []) as string}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
