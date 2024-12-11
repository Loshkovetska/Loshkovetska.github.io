import { Apple, Facebook } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SocialConnect() {
  return (
    <div className="flex flex-col">
      <span className="mb-6 text-center text-sm font-light text-white/90">
        Увійти за допомогою
      </span>
      <div className="flex justify-center gap-10">
        <Button variant="transparent">{/* <Gmail /> */}</Button>
        <Button variant="transparent">
          <Facebook className="size-6 fill-white" />
        </Button>
        <Button variant="transparent">
          <Apple className="size-6 stroke-white" />
        </Button>
      </div>
    </div>
  );
}
