import { useMemo } from "react";

import ShortMovieItem from "@/components/common/short-movie-item";
import DetailsBlock from "@/components/movie-details/details-block";
import MainMovieInfo from "@/components/movie-details/main-movie-info";
import Reviews from "@/components/movie-details/reviews";
import VideoItem from "@/components/movie-details/video-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MovieType } from "@/types/movie";

export default function MovieDetails(movie: MovieType) {
  const { belongs_to_collection, videos, id } = movie;

  const youtubeVideos = useMemo(
    () => videos?.results?.filter((v) => v.site === "YouTube") || [],
    [videos]
  );

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <MainMovieInfo
        {...movie}
        showOptions
      />

      {youtubeVideos?.length > 0 && (
        <DetailsBlock title="Videos">
          <Carousel>
            <CarouselContent>
              {videos?.results.map((video) => (
                <CarouselItem
                  key={video.id}
                  className="flex basis-full md:max-lg:basis-1/3 lg:basis-1/5"
                >
                  <VideoItem id={video.key} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DetailsBlock>
      )}

      {belongs_to_collection && (
        <DetailsBlock title="Belongs to collection">
          <div className="grid w-full grid-cols-2 gap-3 md:gap-4 md:max-lg:grid-cols-3 lg:grid-cols-5">
            <ShortMovieItem
              title={belongs_to_collection.name}
              poster_path={belongs_to_collection.poster_path}
            />
          </div>
        </DetailsBlock>
      )}

      <Reviews id={id} />
    </div>
  );
}
