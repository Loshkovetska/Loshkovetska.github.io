import { Search } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";

import SearchItem from "@/components/common/dialogs/search-dialog/search-item";
import { Button } from "@/components/ui/button";
import Dialog from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scrollarea";
import { useSearchMoviesQuery } from "@/lib/services";
import { cn } from "@/lib/utils";

const PER_PAGE = 10;

export default function SearchDialog() {
  const initialRef = useRef(false);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const { data } = useSearchMoviesQuery(`s=${inputValue}&page=${page}`, {
    skip: inputValue.length < 3,
  });

  const { canFetchNext, canFetchPrevious } = useMemo(() => {
    if (!data) return { canFetchNext: false, canFetchPrevious: false };
    const totalResults = Number(data?.totalResults || 0);

    const totalPages = Math.ceil(totalResults / PER_PAGE);

    return {
      canFetchPrevious: page > 1,
      canFetchNext: page < totalPages,
    };
  }, [data, page]);

  const handlePageChange = useCallback((type: "next" | "prev") => {
    setPage((prev) => prev + (type === "next" ? 1 : -1));
  }, []);

  return (
    <Dialog
      iconClassName="stroke-white"
      className="h-screen w-full max-w-full !rounded-none bg-dark"
      trigger={
        <button className="group flex size-8 cursor-pointer items-center justify-center">
          <Search className="stroke-white/90 group-hover:stroke-white" />
        </button>
      }
    >
      <div
        className={cn(
          "mx-auto flex w-full flex-col items-center gap-8 translate-y-0 transition-all",
          {
            "absolute top-1/2 -translate-y-1/2": !initialRef.current,
          }
        )}
      >
        <Input
          className="border-white/40 hover:border-white/80 lg:w-[70%]"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            initialRef.current = true;
          }}
        />
        {initialRef.current && (
          <div className="flex w-full flex-col items-center gap-8">
            <Label className="text-center text-md text-white">
              Результатів знайдено
              {` ${Number(data?.totalResults || 0)} `}
            </Label>
            <ScrollArea className="flex h-[68vh] w-[88%]">
              <div className="grid w-full grid-cols-5 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2">
                {data?.Search?.map((searchItem) => (
                  <SearchItem
                    key={searchItem.imdbID}
                    {...searchItem}
                  />
                ))}
              </div>
            </ScrollArea>
            {Number(data?.totalResults || 0) > PER_PAGE && (
              <div className="mx-auto flex items-center gap-4">
                <Button
                  onClick={() => handlePageChange("prev")}
                  className="max-w-[200px]"
                  disabled={!canFetchPrevious}
                >
                  See previous
                </Button>
                <Button
                  onClick={() => handlePageChange("next")}
                  className="max-w-[200px]"
                  disabled={!canFetchNext}
                >
                  See next
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </Dialog>
  );
}
