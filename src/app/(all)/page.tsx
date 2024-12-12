import Contact from "@/components/homepage/contact";
import MoviesDay from "@/components/homepage/movies-day";
import UpcomingMovies from "@/components/homepage/upcoming-movies";

export default function Page() {
  return (
    <>
      <UpcomingMovies />
      <MoviesDay />
      <UpcomingMovies current />
      <Contact />
    </>
  );
}
