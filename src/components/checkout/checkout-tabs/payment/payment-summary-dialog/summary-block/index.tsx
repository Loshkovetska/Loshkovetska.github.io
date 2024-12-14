import Image from "next/image";
import { useMemo } from "react";
import { LuX } from "react-icons/lu";

import SeatItemIcon from "@/components/checkout/checkout-tabs/seats/seat-item/seat-item-icon";
import { cn } from "@/lib/utils";
import { OrderType } from "@/types";

type TicketType = { price: number } & OrderType["seats"][0];

type SummaryBlockPropType = {
  totalPrice: number;
  totalCount: number;
  tickets?: TicketType[];
  store?: OrderType["store"];
  title: string;
  onDeleteProduct?: (prod: OrderType["store"][0]) => void;
  onDeleteTicket?: (ticket: TicketType) => void;
};

export default function SummaryBlock({
  title,
  totalPrice,
  totalCount,
  tickets,
  store,
  onDeleteProduct,
  onDeleteTicket,
}: SummaryBlockPropType) {
  const headlines = useMemo(
    () =>
      tickets
        ? ["Type", "Row", "Seat", "Price"]
        : ["Picture", "Name", "Amount", "Size", "Price"],
    [tickets]
  );
  const ticketsRows = useMemo(
    () =>
      !tickets
        ? null
        : tickets?.map((seat) => (
            <tr
              key={seat.id.join(".")}
              className="grid grid-cols-5 gap-3"
            >
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                <SeatItemIcon type={seat.type as "cheaper"} />
              </td>
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                {seat.id[0]}
              </td>
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                {seat.id[1]}
              </td>
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                ${seat.price}
              </td>
              <td className="flex items-center justify-center bg-transparent py-[10px] text-center text-sm font-medium text-white/90">
                <LuX
                  className="stroke-error"
                  onClick={() => onDeleteTicket?.(seat)}
                />
              </td>
            </tr>
          )),
    [tickets, onDeleteTicket]
  );

  const productsRow = useMemo(
    () =>
      !store
        ? null
        : store?.map((prod) => (
            <tr
              key={prod._id}
              className="grid grid-cols-6 gap-3"
            >
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  width={100}
                  height={150}
                  className="w-[100px] object-contain object-center"
                />
              </td>
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                {prod.title}
              </td>
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                {prod.amount}
              </td>
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                {prod.size}
              </td>
              <td className="bg-white/4 flex items-center justify-center py-[10px] text-center text-sm font-medium text-white/90">
                ${prod.price * prod.amount}
              </td>
              <td className="flex items-center justify-center bg-transparent py-[10px] text-center text-sm font-medium text-white/90">
                <LuX
                  className="stroke-error"
                  onClick={() => onDeleteProduct?.({ ...prod, amount: 0 })}
                />
              </td>
            </tr>
          )),
    [store, onDeleteProduct]
  );
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-white">{title}</h3>
        <div className="text-sm text-white/80">
          {totalCount}x, ${totalPrice}
        </div>
      </div>
      {(ticketsRows || productsRow) && (
        <table className="w-full border-collapse">
          <thead>
            <tr
              className={cn("grid gap-3", {
                "grid-cols-5": !!tickets,
                "grid-cols-6": !!store,
              })}
            >
              {headlines.map((headline) => (
                <th
                  key={headline}
                  className="py-4 text-center text-[12px] font-light text-white/90 md:py-8"
                >
                  {headline}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ticketsRows} {productsRow}
          </tbody>
        </table>
      )}
    </div>
  );
}
