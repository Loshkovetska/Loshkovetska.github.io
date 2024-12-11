import Link from "next/link";
import SocialNetworks from "../social-networks";
import { FOOTER_MENU } from "./constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full pt-10 pb-16 bg-dark">
      <div className="w-[85%] mx-auto flex flex-col items-center text-center">
        <div className="mt-10 flex items-center gap-6 mb-5">
          <Link
            className="w-[148px] h-[48px] relative"
            href="#"
          >
            <Image
              src={require("../../../img/googlePlay.png")}
              alt="google-play"
              fill
            />
          </Link>
          <Link
            className="w-[148px] h-[48px] relative"
            href="#"
          >
            <Image
              src={require("../../../img/appStore.png")}
              alt="app-store"
              fill
            />
          </Link>
        </div>
        <ul className="list-none flex flex-wrap justify-center mt-[48px] mb-[28px]">
          {FOOTER_MENU.map((item) => (
            <li
              className="mb-5 mx-[48px] group"
              key={item.title}
            >
              <Link
                className="text-white/80 font-lighter text-md group-hover:text-white group-hover:underline"
                href={item.to}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <SocialNetworks className="max-sm:w-full max-sm:m-0" />
      </div>
    </footer>
  );
}
