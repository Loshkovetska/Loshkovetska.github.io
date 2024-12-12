import Image from "next/image";
import Link from "next/link";

import ApplePay from "@/img/appStore.png";
import GooglePlay from "@/img/googlePlay.png";

import SocialNetworks from "../social-networks";

import { FOOTER_MENU } from "./constants";

export default function Footer() {
  return (
    <footer className="w-full bg-dark pb-16 pt-10">
      <div className="mx-auto flex w-[85%] flex-col items-center text-center">
        <div className="mb-5 mt-10 flex items-center gap-6">
          <div className="relative h-[48px] w-[148px]">
            <Image
              src={GooglePlay}
              alt="google-play"
              fill
            />
          </div>
          <div className="relative h-[48px] w-[148px]">
            <Image
              src={ApplePay}
              alt="app-store"
              fill
            />
          </div>
        </div>
        <ul className="mb-[28px] mt-[48px] flex list-none flex-wrap justify-center gap-4 lg:gap-12">
          {FOOTER_MENU.map((item) => (
            <li
              className="group mb-5"
              key={item.title}
            >
              <Link
                className="font-lighter text-md text-white/80 underline-offset-8 group-hover:text-white group-hover:underline"
                href={item.to}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <SocialNetworks className="max-sm:m-0 max-sm:w-full" />
      </div>
    </footer>
  );
}
