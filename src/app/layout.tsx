import { Metadata } from "next";

import Providers from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cinema Park",
  description: "Watch movies with us",
};

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased">
        <Providers session={props.session}>{props.children}</Providers>
      </body>
    </html>
  );
}
