"use client";

import { useCallback, useState } from "react";

import CheckoutTabs from "@/components/checkout/checkout-tabs";
import Header from "@/components/common/header";
import MainMovieInfo from "@/components/movie-details/main-movie-info";
import { useProductsQuery } from "@/lib/services";
import { OrderType } from "@/types";
import { MovieType } from "@/types/movie";

export default function CheckoutContent(movie: MovieType) {
  useProductsQuery();
  const [tabIndex, setTab] = useState(0);
  const [order, setOrder] = useState<OrderType>({
    movie_id: movie.id,
    seats: [],
    store: [],
  });

  const onTabChange = useCallback(
    (tab: number) => {
      if (tab && !order.seats.length) {
        return;
      }
      setTab(tab);
    },
    [order]
  );

  return (
    <>
      <Header
        page="store"
        tabIndex={tabIndex}
        handleTabChange={onTabChange}
      />
      <div className="mx-auto w-full max-w-[1162px] px-4 pb-10">
        <MainMovieInfo {...movie} />
        <CheckoutTabs
          order={order}
          tabIndex={tabIndex}
          updateOrder={setOrder}
        />
      </div>
    </>
  );
}
