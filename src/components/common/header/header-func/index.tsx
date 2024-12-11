"use client";
import { useState } from "react";

import SearchDialog from "../../dialogs/search-dialog";
import SignInDialog from "../../dialogs/sign-in-dialog";

export default function HeaderFunc() {
  const [isOpen, setOpen] = useState(false);

  //   function changeModalState() {
  //     setOpen(isOpen ? false : true);
  //   }

  //   function exit() {
  //     if (localStorage.user) {
  //       localStorage.clear();
  //       window.location.reload();
  //     }
  //   }

  return (
    <div className="z-1 flex grow justify-end">
      <SignInDialog />
      <SearchDialog />
      {/* {!localStorage.user ? (
        <button
          className="header__login header-login"
          onClick={changeModalState}
        >
          <LoginSvg className={"header__svg"} />
        </button>
      ) : (
        <button
          className="header__login header-login"
          onClick={exit}
        >
          <img
            src={imgUser.img}
            className="user-icon"
          />
        </button>
      )}
      {!localStorage.user ? (
        <LoginModal
          isOpen={isOpen}
          changeState={changeModalState}
        />
      ) : (
        ""
      )} */}
    </div>
  );
}
