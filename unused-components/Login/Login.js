import React, { useState } from "react";
import { Login as LoginSvg } from "../Svg/Svg";

import { users } from "../../mockData/users";
import LoginModal from "../LoginModal/LoginModal";
import "../Login/Login.scss";

export default function Login() {
    const [isOpen, setOpen] = useState(false);
    const [imgUser] = users.filter(user => user.email === localStorage.user);

    function changeModalState() {
        setOpen(isOpen ? false : true);
    }

    function exit() {
        if (localStorage.user) {
            localStorage.clear();
            window.location.reload();
        }
    }

    return (
        <>
            {
                !localStorage.user
                    ? <button className="header__login header-login" onClick={changeModalState}>
                        <LoginSvg className={"header__svg"} />
                    </button>
                    : <button className="header__login header-login" onClick={exit}>
                        <img src={imgUser.img} className="user-icon" />
                    </button>
            }
            {
                !localStorage.user
                    ? <LoginModal isOpen={isOpen} changeState={changeModalState} />
                    : ""
            }
        </>
    );
}