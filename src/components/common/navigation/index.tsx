import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DropdownMenu } from "@/components/ui/dropdown";

import SocialNetworks from "../social-networks";

import NavigationMenu from "./nav-menu";

export default function Navigation() {
  return (
    <nav className="flex w-full items-center">
      <DropdownMenu
        trigger={
          <button className="relative z-[2] mr-10 flex size-8 items-center justify-center">
            <Menu className="stroke-white" />
          </button>
        }
        className="mt-4 w-screen border-none bg-dark/30 pt-6 backdrop-blur-3xl lg:mt-6 lg:w-[232px]"
      >
        <NavigationMenu />
        <SocialNetworks className="px-8" />
      </DropdownMenu>
      <Link
        href="/"
        className="relative h-12 w-[189px] max-sm:ml-[-28px] max-sm:w-[124px]"
      >
        <Image
          src="/logo.png"
          fill
          alt="logo"
          className="object-contain object-center"
        />
      </Link>
    </nav>
  );
}
