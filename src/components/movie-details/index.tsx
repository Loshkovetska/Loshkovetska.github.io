import Image from "next/image";
import { useMemo } from "react";

import GenresList from "@/components/common/genres-list";
import RateBlock from "@/components/common/rate-block";
import ShortMovieItem from "@/components/common/short-movie-item";
import DetailsBlock from "@/components/movie-details/details-block";
import DetailsItem from "@/components/movie-details/details-item";
import Reviews from "@/components/movie-details/reviews";
import VideoItem from "@/components/movie-details/video-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MovieType } from "@/types/movie";

export default function MovieDetails(movie: MovieType) {
  const {
    poster_path,
    title,
    tagline,
    vote_average,
    vote_count,
    genres,
    adult,
    production_countries,
    status,
    runtime,
    production_companies,
    overview,
    belongs_to_collection,
    spoken_languages,
    videos,
    backdrop_path,
    id,
  } = movie;

  const genresNames = useMemo(
    () => genres?.map((genre) => genre.name) || [],
    [genres]
  );

  const countries = useMemo(
    () => production_countries.map((country) => country.name).join(", "),
    [production_countries]
  );

  const duration = useMemo(() => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    const minutesText = String(minutes).padStart(2, "0");

    if (!minutes) return `${hours} hour${hours > 1 ? "s" : ""}`;
    return [hours, minutesText].join(":");
  }, [runtime]);

  const languages = useMemo(
    () => spoken_languages.map((lang) => lang.english_name)?.join(", "),
    [spoken_languages]
  );

  const youtubeVideos = useMemo(
    () => videos?.results?.filter((v) => v.site === "YouTube") || [],
    [videos]
  );

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div
        className="flex gap-8 bg-cover bg-center py-10 after:absolute after:inset-0 after:size-full after:bg-dark/70 after:content-[''] max-lg:flex-col max-lg:!bg-none max-lg:after:invisible md:pt-[80px] lg:gap-14"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + backdrop_path}')`,
        }}
      >
        <div className="relative z-[1] h-[74vw] w-full max-lg:max-w-[380px] max-lg:self-center max-sm:h-[131vw] lg:h-[748px] lg:max-w-[500px]">
          <Image
            src={process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + poster_path}
            fill
            className="object-cover object-center"
            alt={title}
            sizes="100vw, 500px"
          />
        </div>
        <div className="z-[1] flex w-full max-w-[600px] flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="texl-lg flex self-start rounded-full bg-error px-3 py-1 text-center font-bold uppercase text-white">
              {status}
            </span>
            <h1 className="text-2xl text-white md:text-3xl">{title}</h1>
            <span className="text-lg text-white/80 md:text-xl">{tagline}</span>
            <RateBlock
              vote_average={vote_average}
              starClassName="size-5"
              totalReviews={vote_count}
              totalReviewVisible
            />
          </div>
          <GenresList
            genres={genresNames}
            labelClassName="text-md text-white font-medium"
          />
          <div className="flex flex-col gap-4">
            <DetailsItem
              name="Age"
              value={adult ? "18+" : "12+"}
            />
            <DetailsItem
              name="Language"
              value={languages}
            />
            <DetailsItem
              name="Country"
              value={countries}
            />
            <DetailsItem
              name="Duration"
              value={duration}
            />
            <DetailsItem
              name="Production Companies"
              className="flex-col items-start gap-3"
            >
              <div className="flex flex-wrap gap-3">
                {production_companies.map((comp) => (
                  <div
                    className="relative flex h-14 w-[124px] items-center justify-center rounded-md bg-white px-4"
                    key={comp.id}
                  >
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + comp.logo_path
                      }
                      className="object-contain object-center"
                      alt={comp.name}
                      width={124}
                      height={56}
                    />
                  </div>
                ))}
              </div>
            </DetailsItem>
            <DetailsItem
              name="Overview"
              value={overview}
              className="flex-col items-start"
            />
          </div>
        </div>
      </div>

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
