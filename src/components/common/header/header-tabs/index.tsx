import { cn } from "@/lib/utils";

import { HEADER_TABS } from "./constants";

type HeaderTabsPropType = {
  page: "registration" | "store";
  tabIndex?: number;
  handleTabChange?: (ind: number) => void;
};

export default function HeaderTabs({
  page,
  tabIndex,
  handleTabChange,
}: HeaderTabsPropType) {
  const tabs = HEADER_TABS[page];
  return (
    <div className="flex w-full justify-center gap-8">
      {tabs.map((item, index) => (
        <span
          className={cn(
            "text-sm text-white/80 max-md:text-[11px] relative cursor-pointer",
            {
              "after:content-[''] after:w-full after:block after:h-[1px] after:my-2 after:bg-white after:absolute after:-bottom-4 text-white":
                index === tabIndex,
            }
          )}
          key={item.id}
          onClick={() => handleTabChange?.(index)}
        >
          {item.id.padStart(2, "0")} {item.title}
        </span>
      ))}
    </div>
  );
}
