// import Slider from "../Slider/Slider";
// import Login from "../Login/Login";
// import Search from "../Search/Search";
import Navigation from "../navigation";

import HeaderFunc from "./header-func";

export default function Header() {
  return (
    <header className="relative h-[900px] w-full">
      <div className="mx-auto w-[95%]">
        <div className="flex w-full items-center justify-between py-6">
          <Navigation />
          <HeaderFunc />
        </div>
        {/* <Slider isPresale={false} /> */}
      </div>
    </header>
  );
}
