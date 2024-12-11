import Link from "next/link";

import { cn } from "@/lib/utils";

import { SOCIAL_LINKS } from "./constants";

export default function SocialNetworks({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mt-20 mb-6 flex items-center gap-6 justify-center",
        className
      )}
    >
      {SOCIAL_LINKS.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className="group flex items-center justify-center transition-all"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
