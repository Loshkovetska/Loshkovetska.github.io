import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Contact from "@/components/contact";
import MoviesDay from "@/components/movies-day";
import UpcomingMovies from "@/components/upcoming-movies";

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
