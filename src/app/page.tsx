import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Contact from "@/components/homepage/contact";
import MoviesDay from "@/components/homepage/movies-day";
import UpcomingMovies from "@/components/homepage/upcoming-movies";

export default function Page() {
  return (
    <>
      <Header />
      <UpcomingMovies />
      <MoviesDay />
      <UpcomingMovies current />
      <Contact />
      <Footer />
    </>
  );
}
