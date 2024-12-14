import { useCallback } from "react";
import { LuX } from "react-icons/lu";

import { seatsVariants } from "@/components/checkout/checkout-tabs/seats/constants";
import { OrderType } from "@/types";

type SeatsSummaryPropType = {
  selectedSeats: OrderType["seats"];
  onDelete: (id: OrderType["seats"][0]) => void;
};
export default function SeatsSummary({
  selectedSeats,
  onDelete,
}: SeatsSummaryPropType) {
  const getSeatPrice = useCallback((seat: OrderType["seats"][0]) => {
    return seatsVariants.find((seatV) => seatV.type === seat.type)?.price || 0;
  }, []);

  if (!selectedSeats.length) return null;

  return (
    <div className="flex flex-col gap-1 rounded-sm border border-white/80 bg-dark/50 p-2">
      {selectedSeats.map((seat) => (
        <div
          key={seat.id.join(",")}
          className="flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <LuX
              className="stroke-error"
              onClick={() => onDelete(seat)}
            />
            <span className="text-sm text-white">
              {seat.id[0]} row - {seat.id[1]} seat
            </span>
          </div>
          <span className="text-md font-bold text-white">
            ${getSeatPrice(seat)}
          </span>
        </div>
      ))}
    </div>
  );
}
