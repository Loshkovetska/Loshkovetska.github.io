"use client";

import BannerItem from "@/components/homepage/upcoming-movies/banner-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMovieGenresQuery, useReleasedMoviesQuery } from "@/lib/services";

export default function UpcomingMovies({
  current = false,
}: {
  current?: boolean;
}) {
  const { data } = useReleasedMoviesQuery(!current);
  useMovieGenresQuery(undefined);

  return (
    <Carousel
      className="h-screen w-screen md:w-[calc(100vw-16px)] [&>*:first-child]:absolute [&>*:first-child]:inset-0 [&>*:first-child]:size-full"
      opts={{
        slidesToScroll: 1,
      }}
    >
      <CarouselContent className="ml-0 size-full">
        {data?.results.map((item) => (
          <CarouselItem
            key={item.id}
            className="size-full pl-0"
          >
            <BannerItem {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-6 right-6 z-50 flex items-end gap-4 lg:bottom-[60px] lg:right-10">
        <CarouselPrevious className="relative inset-0 size-[46px] !translate-y-0 [&>svg]:size-4" />
        <CarouselNext className="relative inset-0 size-[60px] !translate-y-0 [&>svg]:size-6" />
      </div>
    </Carousel>
  );
}
