"use client";
import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";

import { AppStore, makeStore } from "../lib/store";

export default function StoreProvider(props: PropsWithChildren) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{props.children}</Provider>;
}
