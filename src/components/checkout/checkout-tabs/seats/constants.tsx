import { BigSeat, Seat } from "@/components/checkout/checkout-tabs/seats/icons";

export const seatsVariants = [
  {
    type: "cheaper",
    icon: <Seat className="fill-[#92c57c]" />,
    price: 15,
  },
  {
    type: "less-cheaper",
    icon: <Seat className="fill-[#fab760]" />,
    price: 18,
  },

  {
    type: "less-expensive",
    icon: <Seat className="w-[60px] fill-[#f086cb]" />,
    price: 25,
  },
  {
    type: "expensive",
    icon: <BigSeat className="fill-[#50c1f4]" />,
    price: 35,
  },
];

export const vipSeats = [
  [
    {
      id: [1, 1],
      type: "expensive",
      seat: <BigSeat className="fill-[#50c1f4]" />,
      tooltip: `1 ряд, 1 місце`,
    },
    { id: null, seat: null, tooltip: null, type: null },
    { id: null, seat: null, tooltip: null, type: null },
    {
      id: [1, 2],
      type: "less-expensive",
      seat: <Seat className="w-[60px] fill-[#f086cb]" />,
      tooltip: `1 row, 2 seat`,
    },
    {
      id: [1, 3],
      type: "less-expensive",
      seat: <Seat className="w-[60px] fill-[#f086cb]" />,
      tooltip: `1 row, 3 seat`,
    },
    {
      id: [1, 4],
      type: "less-expensive",
      seat: <Seat className="w-[60px] fill-[#f086cb]" />,
      tooltip: `1 row, 4 seat`,
    },
    {
      id: [1, 5],
      type: "less-expensive",
      seat: <Seat className="w-[60px] fill-[#f086cb]" />,
      tooltip: `1 row, 5 seat`,
    },
    { id: null, seat: null, tooltip: null, type: null },
    { id: null, seat: null, tooltip: null, type: null },
    {
      id: [1, 6],
      type: "expensive",
      seat: <BigSeat className="fill-[#50c1f4]" />,
      tooltip: `1 row, 6 seat`,
    },
  ],
];
