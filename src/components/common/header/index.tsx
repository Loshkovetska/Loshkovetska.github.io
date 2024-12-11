import Navigation from "../navigation";

import HeaderFunc from "./header-func";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-dark/10 p-4 backdrop-blur-3xl lg:py-6">
      <Navigation />
      <HeaderFunc />
    </header>
  );
}
