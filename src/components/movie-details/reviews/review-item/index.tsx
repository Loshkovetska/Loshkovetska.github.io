import dayjs from "dayjs";
import Image from "next/image";

import RateBlock from "@/components/common/rate-block";
import { ReviewItemType } from "@/types";

export default function ReviewItem({
  author,
  author_details,
  created_at,
  content,
}: ReviewItemType) {
  return (
    <div className="flex w-full max-w-[690px] flex-col gap-4 bg-[#1E1C23] px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {author_details.avatar_path && (
            <Image
              src={
                process.env.NEXT_PUBLIC_TMBD_IMAGE_ROOT +
                author_details.avatar_path
              }
              width={40}
              height={40}
              className="overflow-hidden rounded-full object-cover object-center"
              alt={author}
            />
          )}
          <span className="text-md text-white/80">{author}</span>
        </div>
        <span className="font-lighter text-sm text-white/80">
          {dayjs(created_at).format("DD MMM YYYY")}
        </span>
      </div>
      <RateBlock vote_average={author_details.rating} />
      <p className="text-md font-light text-white/80">{content}</p>
    </div>
  );
}
