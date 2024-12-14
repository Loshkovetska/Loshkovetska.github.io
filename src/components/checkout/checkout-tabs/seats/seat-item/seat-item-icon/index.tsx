import { useMemo } from "react";

import { seatsVariants } from "@/components/checkout/checkout-tabs/seats/constants";

export default function SeatItemIcon({
  type,
}: {
  type: "cheaper" | "less-cheaper" | "less-expensive" | "expensive";
}) {
  return useMemo(() => {
    return seatsVariants.find((seat) => seat.type === type)?.icon;
  }, [type]);
}
