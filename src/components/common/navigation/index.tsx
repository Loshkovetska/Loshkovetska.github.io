"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

import SocialNetworks from "../social-networks";

import NavigationMenu from "./nav-menu";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className={cn("w-[372px] h-[900px] top-0 left-0 absolute lg:w-full", {
        "bg-dark backdrop-blur-md z-[2]": isOpen,
      })}
    >
      <div className="mb-8 mt-6 flex items-center">
        <button
          className="relative z-[2] mr-[45px] flex size-8 items-center justify-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="stroke-white" />
        </button>
        <Link
          href="/"
          className="relative h-[48px] w-[189px] max-sm:ml-[-28px] max-sm:w-[124px]"
        >
          <Image
            src={require("../../../img/logo.svg")}
            fill
            alt="logo"
          />
        </Link>
      </div>
      {isOpen && <NavigationMenu />}
      {isOpen && <SocialNetworks />}
    </nav>
  );
}
