import Link from "next/link";

import { cn } from "@/utils";

import { SOCIAL_LINKS } from "./constants";

export default function SocialNetworks({ className }: { className?: string }) {
  return (
    <div className={cn("mt-20 mb-6 flex items-center gap-6", className)}>
      {SOCIAL_LINKS.map((item) => (
        <Link
          href={item.href}
          key={item.id}
        >
          <span className="group flex cursor-pointer items-center justify-center transition-all [&>svg>path]:fill-white/80">
            {item.icon}
          </span>
        </Link>
      ))}
    </div>
  );
}
