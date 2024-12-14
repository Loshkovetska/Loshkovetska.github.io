import { Dispatch, SetStateAction, useCallback } from "react";

import Payment from "@/components/checkout/checkout-tabs/payment";
import Products from "@/components/checkout/checkout-tabs/products";
import Seats from "@/components/checkout/checkout-tabs/seats";
import { OrderType } from "@/types";

type CheckoutTabsPropType = {
  tabIndex: number;
  order: OrderType;
  updateOrder: Dispatch<SetStateAction<OrderType>>;
};

export default function CheckoutTabs({
  tabIndex,
  order,
  updateOrder,
}: CheckoutTabsPropType) {
  const onProductSelect = useCallback(
    (item: OrderType["store"][0]) => {
      updateOrder((prev) => {
        const present = prev.store.find((s) => s._id === item._id);
        let items;

        if (present) {
          if (!item.amount) {
            items = prev.store.filter((s) => s._id !== item._id);
          }

          if (item.amount) {
            items = prev.store.map((s) => (s._id === item._id ? item : s));
          }
        }
        if (!present) {
          items = [...prev.store, item];
        }

        return { ...prev, store: items || [] };
      });
    },
    [updateOrder]
  );

  const onSeatSelect = useCallback(
    (item: OrderType["seats"][0]) => {
      updateOrder((prev) => {
        const present = prev.seats.find(
          (s) =>
            (s.id as number[]).join(",") === (item.id as number[]).join(",")
        );
        const items = present
          ? prev.seats.filter(
              (s) =>
                (s.id as number[]).join(",") !== (item.id as number[]).join(",")
            )
          : [...prev.seats, item];
        return { ...prev, seats: items };
      });
    },
    [updateOrder]
  );

  switch (tabIndex) {
    case 0:
      return (
        <Seats
          onSelect={onSeatSelect}
          selectedSeats={order.seats}
        />
      );
    case 1:
      return (
        <Products
          selectedProducts={order.store}
          onSelect={onProductSelect}
        />
      );
    case 2:
      return (
        <Payment
          order={order}
          onDeleteProduct={onProductSelect}
          onDeleteTicket={onSeatSelect}
        />
      );
    default:
      return null;
  }
}
