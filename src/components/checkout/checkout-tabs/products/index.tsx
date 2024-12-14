import { useCallback, useMemo, useState } from "react";

import ProductItem from "@/components/checkout/checkout-tabs/products/product-item";
import ProductsFilter from "@/components/checkout/checkout-tabs/products/products-filter";
import { VALIDATE_TAGS } from "@/lib/constants";
import { useData } from "@/lib/hooks";
import { OrderType, ProductType } from "@/types";

type ProductsPropType = {
  selectedProducts: OrderType["store"];
  onSelect: (val: OrderType["store"][0]) => void;
};

export default function Products({
  selectedProducts,
  onSelect,
}: ProductsPropType) {
  const [tab, setTab] = useState<"all" | "food" | "drinks">("all");

  const { data } = useData({
    apiName: "checkoutApi",
    queryKey: VALIDATE_TAGS.Products,
  });

  const filterData = useMemo(() => {
    if (tab === "all") return data as ProductType[];
    return (data as ProductType[])?.filter((item) => item.type === tab);
  }, [data, tab]);

  const getAddInfo = useCallback(
    (id: string) => {
      const storeProduct = selectedProducts.find((s) => s._id === id);
      return {
        selectedAmount: storeProduct?.amount || 0,
        selectedSize: (storeProduct?.size || "S") as "S",
      };
    },
    [selectedProducts]
  );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center text-xl font-bold text-white/80">Store</h2>
      <div className="flex items-center justify-center gap-3">
        <ProductsFilter
          tab="all"
          currentTab={tab}
          setTab={setTab}
        />
        <ProductsFilter
          tab="food"
          currentTab={tab}
          setTab={setTab}
        />
        <ProductsFilter
          tab="drinks"
          currentTab={tab}
          setTab={setTab}
        />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filterData?.map((item) => (
          <ProductItem
            key={item._id}
            {...item}
            {...getAddInfo(item._id)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
