import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { NAV_MENU_LIST } from "../constants";

export default function NavigationMenu() {
  const [isOpenSubList, setOpenList] = useState(false);

  return (
    <ul className="flex w-[232px] list-none flex-col gap-10 pl-8">
      {NAV_MENU_LIST.map((item) => (
        <li
          className="text-lg font-light"
          key={item.title}
        >
          {item.subList ? (
            <>
              <span
                className="flex cursor-pointer items-center justify-between gap-3 text-white"
                onClick={() => setOpenList((prev) => !prev)}
              >
                {item.title}{" "}
                <ChevronDown
                  className={cn("", isOpenSubList ? "-rotate-180" : "")}
                />
              </span>
              {isOpenSubList && (
                <ul className="mt-5 flex list-none flex-col gap-6">
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
        </li>
      ))}
    </ul>
  );
}
