import dayjs, { Dayjs } from "dayjs";
import { useCallback, useMemo } from "react";

import DayItem from "@/components/homepage/movies-day/days-slider/day-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type DaysSliderPropType = {
  currentDate: Date;
  onDateChange: (date: Date) => void;
};

export default function DaysSlider({
  currentDate,
  onDateChange,
}: DaysSliderPropType) {
  const getDatesPerMonth = useCallback(
    (totalCount: number, date: Dayjs, startDate: number) => {
      return Array(totalCount)
        .fill("day")
        .map((_, ind) =>
          dayjs(new Date(date.year(), date.month(), startDate + ind)).toDate()
        );
    },
    []
  );

  const datesList = useMemo(() => {
    const today = dayjs();
    const currentDate = today.date();
    const nextMonth = dayjs(new Date(today.year(), today.month() + 1, 1));

    const currentDates = getDatesPerMonth(
      today.daysInMonth() - currentDate + 1,
      today,
      currentDate
    );

    const nextDates = getDatesPerMonth(currentDate, nextMonth, 1);

    const totalDays = [...currentDates, ...nextDates];

    const list = totalDays.map((date) => {
      return {
        date: dayjs(date).date().toString(),
        day: date.toLocaleString("en-EN", { weekday: "short" }),
        fullDate: date,
      };
    });

    return list;
  }, [getDatesPerMonth]);

  return (
    <section className="relative mx-auto w-full lg:w-[85%]">
      <div className="mb-6 text-[20px] text-white/80 max-lg:pl-4">
        Choose the date
      </div>
      <Carousel
        className="flex w-full max-lg:[&>*:first-child]:pl-1 max-lg:[&>*:first-child]:pr-4 lg:[&>*:first-child]:pr-3"
        opts={{
          slidesToScroll: 6,
        }}
      >
        <CarouselContent className="p-4">
          {datesList.map((item) => (
            <CarouselItem
              key={item.date + item.day}
              className="h-[90px] max-w-[70px] pl-3 text-white"
            >
              <DayItem
                date={item.date}
                day={item.day}
                current={
                  item.fullDate.toDateString() === currentDate.toDateString()
                }
                onClick={() => onDateChange(item.fullDate)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
