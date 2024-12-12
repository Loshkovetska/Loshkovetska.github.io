import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type DetailsItemPropType = {
  name: string;
  value?: string | number;
  className?: string;
} & PropsWithChildren;

export default function DetailsItem({
  name,
  value,
  children,
  className,
}: DetailsItemPropType) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-md font-medium text-white">{name}:</span>{" "}
      {children ? (
        children
      ) : (
        <span className="text-md text-white/60">{value}</span>
      )}
    </div>
  );
}
