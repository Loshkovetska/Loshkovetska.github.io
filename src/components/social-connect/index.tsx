import { FaApple, FaFacebook, FaGooglePlus } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SocialConnect() {
  return (
    <div className="flex flex-col">
      <span className="mb-6 text-center text-sm font-light text-white/90">
        Sign in with
      </span>
      <div className="flex justify-center gap-10">
        <Button
          variant="transparent"
          onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
        >
          <FaGooglePlus className="size-6 fill-white" />
        </Button>
        <Button
          variant="transparent"
          onClick={() =>
            signIn("facebook", { redirect: true, callbackUrl: "/" })
          }
        >
          <FaFacebook className="size-6 fill-white" />
        </Button>
        <Button
          variant="transparent"
          onClick={() => signIn("apple", { redirect: true, callbackUrl: "/" })}
        >
          <FaApple className="size-6 fill-white" />
        </Button>
      </div>
    </div>
  );
}
