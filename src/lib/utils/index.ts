import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./seat";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
