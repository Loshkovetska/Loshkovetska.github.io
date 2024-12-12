import Link from "next/link";

export default function VideoItem({ id }: { id: string }) {
  return (
    <Link
      className="relative flex h-[200px] w-full overflow-hidden rounded-sm max-sm:h-[52vw]"
      target="_blank"
      href={`https://www.youtube.com/watch?v=${id}`}
    >
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}?si=vTl658PXs9xlD6z7&amp;controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="pointer-events-none absolute inset-0 size-full"
        loading="lazy"
      />
    </Link>
  );
}
