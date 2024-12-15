import HeaderTabs from "@/components/common/header/header-tabs";

import Navigation from "../navigation";

import HeaderFunc from "./header-func";

type HeaderPropType = {
  page?: "sign-up" | "store";
  tabIndex?: number;
  handleTabChange?: (num: number) => void;
};

export default function Header({
  page,
  tabIndex,
  handleTabChange,
}: HeaderPropType) {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-dark/10 p-4 backdrop-blur-3xl lg:py-6">
      {page ? (
        <HeaderTabs
          tabIndex={tabIndex}
          page={page}
          handleTabChange={handleTabChange}
        />
      ) : (
        <>
          <Navigation />
          <HeaderFunc />
        </>
      )}
    </header>
  );
}
