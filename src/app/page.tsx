import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Contact from "@/components/contact";
import UpcomingMovies from "@/components/upcoming-movies";

export default function Page() {
  return (
    <>
      <Header />
      <UpcomingMovies />
      <Contact />
      <Footer />
      {/* <main className="main">
        <MoviesDay />
        <Slider isPresale={true} />
        <Contact />
      </main>
      <Footer /> */}
    </>
  );
}
