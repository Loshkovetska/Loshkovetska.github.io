import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import GenresList from "@/components/common/genres-list";
import RateBlock from "@/components/common/rate-block";
import DetailsItem from "@/components/movie-details/details-item";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MovieType } from "@/types/movie";

export default function MainMovieInfo(
  movie: MovieType & { showOptions?: boolean }
) {
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
    spoken_languages,
    backdrop_path,
    id,
    showOptions,
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

  return (
    <div
      className={cn(
        "flex gap-8 bg-cover bg-center py-10 after:absolute after:inset-0 after:size-full after:bg-dark/70 after:content-[''] max-lg:flex-col max-lg:!bg-none max-lg:after:invisible md:pt-[80px] lg:gap-14",
        {
          "!gap-5 !md:flex-row justify-center after:invisible": !showOptions,
        }
      )}
      style={
        showOptions
          ? {
              backgroundImage: `url('${process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + backdrop_path}')`,
            }
          : undefined
      }
    >
      <div
        className={cn(
          "relative z-[1] h-[74vw] w-full max-lg:max-w-[380px] max-lg:self-center max-sm:h-[131vw] lg:h-[748px] lg:max-w-[500px]",
          {
            "!w-[200px] !h-[300px] min-w-[200px] max-w-[200px]": !showOptions,
          }
        )}
      >
        <Image
          src={process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT + poster_path}
          fill
          className="object-cover object-center"
          alt={title}
          sizes="100vw, 500px"
        />
      </div>
      <div
        className={cn("z-[1] flex w-full max-w-[600px] flex-col gap-5", {
          "max-w-none w-auto gap-3": !showOptions,
        })}
      >
        <div className="flex flex-col gap-2">
          <span
            className={cn(
              "texl-lg flex self-start rounded-full bg-error px-3 py-1 text-center font-bold uppercase text-white",
              {
                "text-sm text-white px-2 py-0.5": !showOptions,
              }
            )}
          >
            {status}
          </span>
          <h1
            className={cn("text-2xl text-white md:text-3xl", {
              "!text-xl": !showOptions,
            })}
          >
            {title}
          </h1>
          {tagline && (
            <span className="text-lg text-white/80 md:text-xl">{tagline}</span>
          )}
          <RateBlock
            vote_average={vote_average}
            starClassName={showOptions ? "size-5" : "size-3"}
            totalReviews={vote_count}
            totalReviewVisible
            titleClassName={showOptions ? "" : "text-sm"}
          />
        </div>
        {showOptions && (
          <Link href={`/checkout/${id}`}>
            <Button>Go to Payment</Button>
          </Link>
        )}
        <GenresList
          genres={genresNames}
          labelClassName={cn(
            "text-white font-medium",
            showOptions ? "text-md" : "text-sm"
          )}
        />
        <div className="flex flex-col gap-4">
          <DetailsItem
            name="Age"
            value={adult ? "18+" : "12+"}
            className={showOptions ? "" : "[&>span]:text-sm"}
          />
          <DetailsItem
            name="Language"
            value={languages}
            className={showOptions ? "" : "[&>span]:text-sm"}
          />
          <DetailsItem
            name="Country"
            value={countries}
            className={showOptions ? "" : "[&>span]:text-sm"}
          />
          <DetailsItem
            name="Duration"
            value={duration}
            className={showOptions ? "" : "[&>span]:text-sm"}
          />
          {showOptions && (
            <>
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
                          process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT +
                          comp.logo_path
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
