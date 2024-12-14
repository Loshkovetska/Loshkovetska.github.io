import SeatMap from "@/components/checkout/checkout-tabs/seats/seat-map";
import SeatVariants from "@/components/checkout/checkout-tabs/seats/seat-variants";
import SeatsSummary from "@/components/checkout/checkout-tabs/seats/seats-summary";
import { ScrollArea, ScrollBar } from "@/components/ui/scrollarea";
import { OrderType } from "@/types";

type SeatsPropType = {
  selectedSeats: OrderType["seats"];
  onSelect: (v: OrderType["seats"][0]) => void;
};

export default function Seats({ selectedSeats, onSelect }: SeatsPropType) {
  return (
    <div className="w-full">
      <h2 className="my-10 text-center text-[20px] font-bold text-white/80">
        Choose the seat
      </h2>
      <div className="flex w-full flex-col gap-6 pb-8">
        <SeatVariants />
        <SeatsSummary
          selectedSeats={selectedSeats}
          onDelete={onSelect}
        />
        <ScrollArea>
          <div className="flex max-w-[1162px] flex-col">
            <div className="mb-6 flex justify-between border-t-[5px] border-error">
              <span className="mt-20 w-[395px] text-left text-md font-light text-white/80">
                Row
              </span>
              <span className="mt-[30px] w-[520px] text-center text-md font-light text-white/80">
                Screen
              </span>
              <span className="mt-20 w-[395px] text-right text-md font-light text-white/80">
                Row
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex w-[395px] flex-col gap-[10px]">
                <SeatMap
                  position="left"
                  selectedSeats={selectedSeats}
                  onSelect={onSelect}
                />
              </div>
              <div className="flex w-[520px] flex-col justify-center gap-[10px]">
                <SeatMap
                  position="center"
                  selectedSeats={selectedSeats}
                  onSelect={onSelect}
                />
              </div>
              <div className="flex w-[395px] flex-col items-end gap-[10px]">
                <SeatMap
                  position="right"
                  selectedSeats={selectedSeats}
                  onSelect={onSelect}
                />
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center gap-[10px]">
              <SeatMap
                position="vip"
                selectedSeats={selectedSeats}
                onSelect={onSelect}
              />
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
