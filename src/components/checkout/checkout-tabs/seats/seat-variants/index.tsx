import { seatsVariants } from "@/components/checkout/checkout-tabs/seats/constants";

export default function SeatVariants() {
  return (
    <div className="mx-auto flex w-full max-w-[509px] flex-wrap items-center justify-center gap-8 md:w-[509px]">
      {seatsVariants.map((place, index) => (
        <div
          className="flex items-center gap-2"
          key={index}
        >
          {place.icon}
          <span className="text-md font-light text-white">${place.price}</span>
        </div>
      ))}
    </div>
  );
}
