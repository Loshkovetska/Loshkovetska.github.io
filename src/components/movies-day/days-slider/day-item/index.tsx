import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DayItemPropType = {
  date: string;
  day: string;
  current?: boolean;
  onClick: () => void;
};

export default function DayItem({
  date,
  day,
  current,
  onClick,
}: DayItemPropType) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "border-white/12 size-full origin-center flex-col justify-center rounded-[5px] bg-transparent transition-all hover:scale-110 hover:border-white/50",
        current ? "scale-110 border-white/50" : ""
      )}
      variant="outline"
    >
      <span className="text-lg text-white/50">{date}</span>
      <span className="text-md font-light text-white/50">{day}</span>
    </Button>
  );
}
