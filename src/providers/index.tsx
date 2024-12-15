import { PropsWithChildren } from "react";

import SessionProvider from "@/providers/session-provider";
import StoreProvider from "@/providers/store-provider";

export default function Providers(props: PropsWithChildren & { session: any }) {
  return (
    <SessionProvider session={props.session}>
      <StoreProvider>{props.children}</StoreProvider>
    </SessionProvider>
  );
}
