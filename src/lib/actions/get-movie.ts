"use server";

import { notFound } from "next/navigation";

export const getMovie = async (id: string, video = true) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?${video ? "append_to_response=videos&" : ""}language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMBD_TOKEN}`,
      },
      next: { tags: ["details", id] },
    }
  )
    .then((res) => res.json())
    .catch(() => notFound());

  if ("success" in response && !response.success) {
    return notFound();
  }

  return response;
};
