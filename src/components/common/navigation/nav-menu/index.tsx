"use client";
import Link from "next/link";

import { DropdownMenuItem } from "@/components/ui/dropdown";

import { NAV_MENU_LIST } from "../constants";

export default function NavigationMenu() {
  return (
    <ul className="flex w-full list-none flex-col gap-10 pl-8 lg:w-[232px]">
      {NAV_MENU_LIST.map((item) => (
        <DropdownMenuItem
          className="justify-left flex-col items-start text-lg font-light"
          key={item.title}
        >
          <Link
            href={item.to}
            className="text-white hover:text-white/90"
          >
            {item.title}
          </Link>
        </DropdownMenuItem>
      ))}
    </ul>
  );
}
