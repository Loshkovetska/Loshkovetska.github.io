import { Metadata } from "next";
import "./globals.css";
import "tailwindcss/tailwind.css";

export const metadata: Metadata = {
  title: "Cinema Park",
  description: "Watch movies with us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="flex min-h-full flex-col"
    >
      <head></head>
      <body className="flex grow flex-col antialiased">{children}</body>
    </html>
  );
}
