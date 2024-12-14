import { useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";

import SummaryBlock from "@/components/checkout/checkout-tabs/payment/payment-summary-dialog/summary-block";
import { seatsVariants } from "@/components/checkout/checkout-tabs/seats/constants";
import { Button } from "@/components/ui/button";
import Dialog from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scrollarea";
import { OrderType } from "@/types";

type PaymentSummaryDialogPropType = {
  open: boolean;
  order: OrderType;
  onOpenChange: (fl: boolean) => void;
  onDeleteTicket: (ticket: OrderType["seats"][0]) => void;
  onDeleteProduct: (prod: OrderType["store"][0]) => void;
};

export default function PaymentSummaryDialog({
  open,
  order,
  onOpenChange,
  onDeleteTicket,
  onDeleteProduct,
}: PaymentSummaryDialogPropType) {
  const tickets = useMemo(
    () =>
      order.seats.map((seat) => ({
        ...seat,
        price: seatsVariants.find((v) => v.type === seat.type)?.price || 0,
      })),
    [order]
  );

  const totalTicketsPrice = useMemo(
    () => tickets.reduce((prev, curr) => prev + curr.price, 0),
    [tickets]
  );

  const totalStorePrice = useMemo(
    () =>
      order.store.reduce((prev, curr) => prev + curr.price * curr.amount, 0),
    [order]
  );
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Your Order"
      titleClassName="text-lg text-white"
      className="w-full max-w-[714px] gap-4 bg-black/80 backdrop-blur-2xl max-sm:w-[95%] max-sm:p-6 md:gap-6"
    >
      <ScrollArea className="h-[340px] md:h-[400px]">
        <div className="flex w-full flex-col gap-4 md:gap-6">
          <SummaryBlock
            title="Tickets"
            tickets={tickets}
            totalCount={tickets.length}
            totalPrice={totalTicketsPrice}
            onDeleteTicket={onDeleteTicket}
          />

          {order.store.length > 0 && (
            <SummaryBlock
              title="Store"
              store={order.store}
              totalCount={order.store.length}
              totalPrice={totalStorePrice}
              onDeleteProduct={onDeleteProduct}
            />
          )}
        </div>
      </ScrollArea>
      <div className="flex items-center gap-6 max-sm:flex-col max-sm:gap-4">
        <div className="flex w-full items-center gap-12">
          <div className="text-lg font-light text-white max-sm:grow">
            General: ${totalTicketsPrice + totalStorePrice}
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="text-sm font-light text-white/80">
              Tickets: {order.seats.length}x
            </div>
            <div className="text-sm font-light text-white/80">
              Store: {order.store.length}x
            </div>
          </div>
        </div>
        <Button
          onClick={() => onOpenChange(false)}
          className="w-full md:w-[240px]"
        >
          Continue <FaArrowRight />
        </Button>
      </div>
    </Dialog>
  );
}
