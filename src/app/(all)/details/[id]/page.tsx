
import MovieDetails from "@/components/movie-details";
import { getMovie } from "@/lib/actions";
import { PageProps } from "@/types";

export default async function Page(props: PageProps) {
  const { params } = props;
  const ps = await params;

  const response = await getMovie(ps.id)

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-10">
      <MovieDetails {...response} />
    </div>
  );
}
