"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import { DropdownMenuItem } from "@/components/ui/dropdown";
import { cn } from "@/lib/utils";

import { NAV_MENU_LIST } from "../constants";

export default function NavigationMenu() {
  const [isOpenSubList, setOpenList] = useState(false);

  return (
    <ul className="flex w-full list-none flex-col gap-10 pl-8 lg:w-[232px]">
      {NAV_MENU_LIST.map((item) => (
        <DropdownMenuItem
          className="justify-left flex-col items-start text-lg font-light"
          key={item.title}
        >
          {item.subList ? (
            <>
              <span
                className="flex cursor-pointer items-center justify-between gap-3 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setOpenList((prev) => !prev);
                }}
              >
                {item.title}{" "}
                <FaChevronDown
                  className={cn("", isOpenSubList ? "-rotate-180" : "")}
                />
              </span>
              {isOpenSubList && (
                <ul className="mt-5 flex list-none flex-col gap-6 pl-2">
                  {item.subList.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        href={item.to}
                        className="text-white/90"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              href={item.to}
              className="text-white hover:text-white/90"
            >
              {item.title}
            </Link>
          )}
        </DropdownMenuItem>
      ))}
    </ul>
  );
}
