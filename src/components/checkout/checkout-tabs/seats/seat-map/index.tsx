import { Fragment, useCallback, useMemo } from "react";

import { seatsVariants } from "@/components/checkout/checkout-tabs/seats/constants";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { cn, generateSeatsMap } from "@/lib/utils";
import { OrderType } from "@/types";

type SeatMapPropType = {
  selectedSeats: OrderType["seats"];
  position: "left" | "center" | "right" | "vip";
  onSelect?: (item: OrderType["seats"][0]) => void;
};

export default function SeatMap({
  selectedSeats,
  position,
  onSelect,
}: SeatMapPropType) {
  const seats = useMemo(() => generateSeatsMap(position), [position]);

  const getIcon = useCallback((type: string) => {
    return seatsVariants.find((seat) => seat.type === type)?.icon;
  }, []);

  const isSelected = useCallback(
    (seat: { id: number[]; type: string; tooltip: string }) => {
      const present = selectedSeats.find(
        (s) => s.id.join(",") === seat.id.join(",")
      );
      return !!present;
    },
    [selectedSeats]
  );

  return seats.map((row, index) => (
    <div
      className={cn(
        "flex gap-[10px]",
        position === "center" ? "justify-center" : ""
      )}
      key={index}
    >
      {position !== "center" && position !== "vip" && (
        <div
          className={cn(
            "text-md font-light text-white/80 size-5",
            position === "right" ? "order-1 text-right" : ""
          )}
        >
          {index + 1}
        </div>
      )}
      {row.map((item, index) => (
        <Fragment key={index}>
          {item ? (
            <Tooltip
              trigger={
                <Button
                  className={cn(
                    "size-5 !p-0",
                    isSelected(item) ? "[&>svg>rect]:fill-error" : ""
                  )}
                  variant="transparent"
                  onClick={() => onSelect?.({ id: item.id, type: item.type })}
                >
                  {getIcon(item.type)}
                </Button>
              }
              text={item.tooltip}
            />
          ) : (
            <div className="size-5" />
          )}
        </Fragment>
      ))}
    </div>
  ));
}
