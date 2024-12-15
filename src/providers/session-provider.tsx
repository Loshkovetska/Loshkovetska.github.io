"use client";
import {
  SessionProvider as NextSessionProvider,
  SessionContextValue,
} from "next-auth/react";

type SessionProviderPropType = {
  session: SessionContextValue["data"];
} & React.PropsWithChildren;

export default function SessionProvider(props: SessionProviderPropType) {
  return (
    <NextSessionProvider session={props.session}>
      {props.children}
    </NextSessionProvider>
  );
}
