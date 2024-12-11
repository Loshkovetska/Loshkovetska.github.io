import { PropsWithChildren } from "react";

import StoreProvider from "@/providers/store-provider";

export default function Providers(props: PropsWithChildren) {
  return <StoreProvider>{props.children}</StoreProvider>;
}
