import { Metadata } from "next";
import { PropsWithChildren } from "react";

import Providers from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cinema Park",
  description: "Watch movies with us",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased">
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
