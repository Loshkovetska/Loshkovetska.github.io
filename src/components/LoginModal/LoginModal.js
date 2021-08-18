import React, { useState, useEffect } from "react";
import { Exit, Google, Facebook, Apple, CloseEye, OpenEye } from "../Svg/Svg";
import { users } from "../../mockData/users";
import { Link } from "react-router-dom";

export default function LoginModal(props) {
    const [canFix, fixState] = useState(false);
    const [showPass, showState] = useState(false);
    let targetInput;

    function userLogin(e) {
        e.preventDefault();
        const userEmail = e.target[0].value;
        const userPass = e.target[1].value;
        const isChecked = e.target[3].checked;

        const result = users.filter(({ email, password }) => email === userEmail && password === userPass);

        if (!result.length) {
            alert("На жаль Ви не є членом нашого кіноклубу!");
            return;
        }

        isChecked
            ? localStorage.setItem("user", userEmail)
            : sessionStorage.setItem("user", userEmail);

        changeModalState();
    }

    function fixPlaceHolder() {
        fixState(true);
    }

    function getInputType(e) {
        targetInput = e.currentTarget;
    }

    function changeStatePass() {
        showState(showPass ? false : true);

        if (targetInput) {
            targetInput.type = (targetInput.type === "password") ? "text" : "password";
        }
    }

    function changeModalState() {
        props.changeState();
    }

    return (
        <div className={"login-modal" + (props.isOpen ? " login-modal--open" : "")}>
            <div className="login-modal__container">
                <div className="login-modal__top">
                    <span className="login-modal__title">Вхід</span>
                    <button className="login-modal__exit" onClick={changeModalState}>
                        <Exit className={"exit-svg"} />
                    </button>
                </div>
                <div className="login-modal__content login-content">
                    <div className="login-content__methods-login methods-login">
                        <span className="methods-login__title">Увійти за допомогою</span>
                        <div className="methods-login__links">
                            <Link className="login-link" to="#"><Google /></Link>
                            <Link className="login-link" to="#"><Facebook /></Link>
                            <Link className="login-link" to="#"><Apple /></Link>
                        </div>
                    </div>
                    <div className="login-content__form login-form">
                        <form method="POST" encType="multipart/form-data" onSubmit={userLogin} className="form">
                            <label className="label">
                                <input type="email" name="user-email" className="input input--focus" required onBlur={fixPlaceHolder} />
                                <span className={"label-text" + (canFix ? " label-text--fixed" : "")}>E-mail</span>
                            </label>
                            <label className="label">
                                <input
                                    type="password"
                                    className={"input input--pass" + (showPass ? " input--show-pass" : "")}
                                    name="user-password"
                                    placeholder="Пароль"
                                    onFocus={getInputType}
                                    required />
                                <button className="pass-eye" type="button"
                                    onClick={changeStatePass}>
                                    {showPass ? <OpenEye /> : <CloseEye />}
                                </button>
                            </label>
                            <label className="checkbox-label label">
                                <input type="checkbox" name="remember" className="checkbox" />
                                <span className="label-text">Запам’ятати мене</span>
                            </label>
                            <button className="button" type="submit">Увійти</button>
                        </form>
                        <Link to="#" className="login-form__forgot-link">Забули пароль?</Link>
                    </div>
                </div>
                <div className="login-modal__bottom">
                    <span className="login-modal__text">Ще не створили аккаунт?</span>
                    <Link className="login-modal__reg-link" to={"/registration"}>Приєднатися до кінородини</Link>
                </div>
            </div>
        </div>
    );
}