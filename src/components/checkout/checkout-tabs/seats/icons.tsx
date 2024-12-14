import { CustomIconType } from "@/types";

export const Seat = ({ className }: CustomIconType) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="20"
      height="14"
      rx="2"
      fill="none"
      className={className}
    />
    <rect
      y="16"
      width="20"
      height="4"
      rx="2"
      fill="none"
      className={className}
    />
  </svg>
);

export const BigSeat = ({ className }: CustomIconType) => (
  <svg
    width="60"
    height="20"
    viewBox="0 0 60 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="60"
      height="14"
      rx="2"
      fill="none"
      fillOpacity="0.4"
      className={className}
    />
    <rect
      y="16"
      width="60"
      height="4"
      rx="2"
      fill="none"
      fillOpacity="0.4"
      className={className}
    />
  </svg>
);
