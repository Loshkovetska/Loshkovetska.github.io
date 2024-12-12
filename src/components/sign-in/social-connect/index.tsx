import { FaApple, FaFacebook, FaGooglePlus } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function SocialConnect() {
  return (
    <div className="flex flex-col">
      <span className="mb-6 text-center text-sm font-light text-white/90">
        Sign in with
      </span>
      <div className="flex justify-center gap-10">
        <Button variant="transparent">
          <FaGooglePlus className="size-6 fill-white" />
        </Button>
        <Button variant="transparent">
          <FaFacebook className="size-6 fill-white" />
        </Button>
        <Button variant="transparent">
          <FaApple className="size-6 fill-white" />
        </Button>
      </div>
    </div>
  );
}
