import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProductsFilterPropType = {
  tab: "all" | "food" | "drinks";
  currentTab: "all" | "food" | "drinks";
  setTab: (type: "all" | "food" | "drinks") => void;
};
export default function ProductsFilter({
  tab,
  currentTab,
  setTab,
}: ProductsFilterPropType) {
  return (
    <Button
      onClick={() => setTab(tab)}
      variant="transparent"
      className={cn(
        "text-md text-white capitalize",
        currentTab === tab ? "font-bold underline underline-offset-4" : ""
      )}
    >
      {tab}
    </Button>
  );
}
