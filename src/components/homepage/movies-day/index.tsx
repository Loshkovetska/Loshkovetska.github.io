"use client";
import dayjs from "dayjs";
import { useCallback, useState } from "react";

import DaysSlider from "@/components/homepage/movies-day/days-slider";
import MoviesList from "@/components/homepage/movies-day/movies-list";

export default function MoviesDay() {
  const [currentDate, setDate] = useState(dayjs().toDate());

  const getNextDate = useCallback(() => {
    const next = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );

    return next;
  }, [currentDate]);
  return (
    <section className="bg-dark pb-[100px] pt-10">
      <div className="mx-auto w-full max-w-screen-xl">
        <DaysSlider
          onDateChange={setDate}
          currentDate={currentDate}
        />
        <MoviesList
          currentDate={currentDate}
          nextDate={getNextDate()}
        />
      </div>
    </section>
  );
}
