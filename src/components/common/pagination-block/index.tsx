import { Button } from "@/components/ui/button";

type PaginationBlockPropType = {
  canFetchPrevious: boolean;
  canFetchNext: boolean;
  handlePageChange: (type: "next" | "prev") => void;
};

export default function PaginationBlock({
  canFetchPrevious,
  canFetchNext,
  handlePageChange,
}: PaginationBlockPropType) {
  return (
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
  );
}
