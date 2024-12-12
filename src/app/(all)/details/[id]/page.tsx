import { notFound } from "next/navigation";

import MovieDetails from "@/components/movie-details";
import { PageProps } from "@/types";

export default async function Page(props: PageProps) {
  const { params } = props;
  const ps = await params;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${ps.id}?append_to_response=videos&language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMBD_TOKEN}`,
      },
      next: { tags: ["details", ps.id] },
    }
  )
    .then((res) => res.json())
    .catch(() => notFound());

  if ("success" in response && !response.success) {
    return notFound();
  }
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-10">
      <MovieDetails {...response} />
    </div>
  );
}
