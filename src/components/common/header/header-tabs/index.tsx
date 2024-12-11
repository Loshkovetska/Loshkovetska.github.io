import { cn } from "@/lib/utils";

import { HEADER_TABS } from "./constants";

type HeaderTabsPropType = {
  page: "registration" | "store";
  tabIndex?: number;
  handleTabChange?: (ind: number) => void;
};

export default function HeaderTabs({ page, tabIndex }: HeaderTabsPropType) {
  const tabs = HEADER_TABS[page];
  return (
    <div className="flex w-full justify-center gap-8 max-lg:absolute max-lg:left-[calc(50%-233px)] max-lg:top-[70px] max-lg:max-w-[400px] max-md:left-0">
      {tabs.map((item, index) => (
        <span
          className={cn("pb-8 text-sm text-white/80 max-md:text-[11px]", {
            "after:content-[''] after:block after:h-[1px] after:my-2 bg-white":
              index === tabIndex,
          })}
          key={item.id}
        >
          {item.id.padStart(2, "0")}
          {item.title}
        </span>
      ))}
    </div>
  );
}
