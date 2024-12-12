import Link from "next/link";
import { FaUser } from "react-icons/fa";

import SignInForm from "@/components/forms/sign-in-form";
import SocialConnect from "@/components/social-connect";
import Dialog from "@/components/ui/dialog";

export default function SignInDialog() {
  return (
    <Dialog
      title="Sign In"
      titleClassName="text-lg text-white"
      trigger={
        <button className="group flex size-8 cursor-pointer items-center justify-center">
          <FaUser className="fill-white/90 stroke-white/90 group-hover:fill-white group-hover:stroke-white" />
        </button>
      }
      className="border-none bg-dark max-md:w-[90%] lg:max-w-[600px]"
    >
      <div className="flex w-full flex-col gap-8 lg:my-10">
        <SocialConnect />
        <SignInForm />
        <div className="flex items-center gap-3">
          <span className="text-sm font-light text-white">
            Don&apos;t have an account?
          </span>
          <Link
            href="/sign-up"
            className="text-md text-white/80 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </Dialog>
  );
}
