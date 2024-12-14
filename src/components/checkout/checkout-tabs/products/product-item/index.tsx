import Image from "next/image";
import { useCallback } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { OrderType, ProductType } from "@/types";

export default function ProductItem(
  item: ProductType & {
    selectedAmount: number;
    selectedSize: "S" | "M" | "L";
    onSelect: (pr: OrderType["store"][0]) => void;
  }
) {
  const { selectedAmount, selectedSize, onSelect, ...product } = item;

  const onUpdate = useCallback(
    (amount: number, size: "S" | "M" | "L") => {
      onSelect({
        ...product,
        amount,
        size,
      });
    },
    [product, onSelect]
  );

  return (
    <div className="bg-white/1 flex w-full select-none flex-col items-center">
      <Image
        src={product.image}
        width={150}
        height={150}
        className="mb-4 h-[150px] object-contain"
        alt="good"
      />
      <div className="flex flex-col gap-4">
        <span className="text-center text-lg text-white">{product.title}</span>
        <span className="text-center text-md font-light text-white">
          ${product.price}
        </span>
      </div>
      <div
        className={cn(
          "mb-5 mt-10 flex w-full",
          product.type === "food" ? "justify-between" : "justify-end"
        )}
      >
        {product.type === "food" && (
          <Select
            options={["S", "M", "L"]}
            placeholder="Size"
            value={selectedSize}
            onValueChange={(s) => onUpdate(selectedAmount, s as "S")}
            triggerClassName="w-[90px] h-[28px]"
          />
        )}
        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            className="size-6 rounded-full border-white/40 bg-transparent p-0 text-white/20"
            disabled={!selectedAmount}
            onClick={() => onUpdate(selectedAmount - 1, selectedSize)}
          >
            <FaMinus className="fill-white" />
          </Button>
          <span className="block min-w-5 max-w-5 text-center text-lg font-light text-white">
            {selectedAmount}
          </span>
          <Button
            variant="outline"
            className="size-6 rounded-full border-white/40 bg-transparent p-0 text-white/20"
            disabled={selectedAmount > 4}
            onClick={() => onUpdate(selectedAmount +1, selectedSize)}
          >
            <FaPlus className="fill-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
