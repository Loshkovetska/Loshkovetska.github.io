"use client";

import HeaderAvatar from "@/components/common/header/header-func/header-avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown";
import { Label } from "@/components/ui/label";
import { signOut, useSession } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";
import SearchDialog from "../../dialogs/search-dialog";
import SignInDialog from "../../dialogs/sign-in-dialog";

export default function HeaderFunc() {
  const { data: session, status } = useSession();

  return (
    <div className="z-[1] flex grow justify-end gap-3">
      {status === "unauthenticated" && <SignInDialog />}
      {status !== "unauthenticated" && (
        <DropdownMenu
          trigger={
            <Button
              className="flex size-8 cursor-pointer items-center justify-center !p-0"
              variant="transparent"
            >
              <HeaderAvatar
                image={session?.user?.image}
                name={session?.user?.name}
              />
            </Button>
          }
          className="bg-white p-4"
        >
          <Label
            onClick={() => signOut({ redirect: true })}
            className="flex gap-2 items-center cursor-pointer hover:opacity-60"
          >
            <LuLogOut />
            Sign Out
          </Label>
        </DropdownMenu>
      )}
      <SearchDialog />
    </div>
  );
}
