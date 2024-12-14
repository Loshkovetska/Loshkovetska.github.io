import { useCallback, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

import PaginationBlock from "@/components/common/pagination-block";
import ShortMovieItem from "@/components/common/short-movie-item";
import Dialog from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scrollarea";
import { QUERY_TAGS } from "@/lib/constants";
import { usePagination } from "@/lib/hooks";
import { useSearchMoviesQuery } from "@/lib/services";
import { cn } from "@/lib/utils";

const PER_PAGE = 20;

export default function SearchDialog() {
  const initialRef = useRef(false);
  const [inputValue, setInputValue] = useState("");

  const { page, canFetchNext, canFetchPrevious, handlePageChange, setPage } =
    usePagination(QUERY_TAGS.SearchMovie);

  const { data } = useSearchMoviesQuery(`query=${inputValue}&page=${page}`, {
    skip: inputValue.length < 3,
  });

  const handleValueChange = useCallback(
    (text: string) => {
      setInputValue(text);
      setPage(1);
      initialRef.current = true;
    },
    [setPage]
  );

  return (
    <Dialog
      iconClassName="stroke-white"
      className="h-screen w-full max-w-full !rounded-none bg-dark"
      trigger={
        <button className="group flex size-8 cursor-pointer items-center justify-center">
          <FaSearch className="fill-white/90 stroke-white/90 group-hover:fill-white group-hover:stroke-white" />
        </button>
      }
    >
      <div
        className={cn(
          "mx-auto flex w-full flex-col items-center gap-8 translate-y-0 transition-all",
          {
            "absolute top-1/2 -translate-y-1/2 max-lg:w-[calc(100%-48px)]":
              !initialRef.current,
          }
        )}
      >
        <Input
          className="border-white/40 hover:border-white/80 lg:w-[70%]"
          value={inputValue}
          onChange={(e) => handleValueChange(e.target.value)}
        />
        {initialRef.current && (
          <div className="flex w-full flex-col items-center gap-8">
            <Label className="text-center text-md text-white">
              Результатів знайдено
              {` ${data?.total_results || 0} `}
            </Label>
            <ScrollArea className="flex h-[68vh] w-[88%]">
              <div className="grid w-full grid-cols-5 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2">
                {data?.results?.map((searchItem) => (
                  <ShortMovieItem
                    key={searchItem.id}
                    {...searchItem}
                  />
                ))}
              </div>
            </ScrollArea>
            {Number(data?.total_results || 0) > PER_PAGE && (
              <PaginationBlock
                canFetchNext={canFetchNext}
                canFetchPrevious={canFetchPrevious}
                handlePageChange={handlePageChange}
              />
            )}
          </div>
        )}
      </div>
    </Dialog>
  );
}
