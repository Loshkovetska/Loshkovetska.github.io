import React, { useState, useEffect } from "react";
import "../Form/Form.scss";
import { Exit } from "../Svg/Svg";

export default function Contact() {
    const [canFix, fixState] = useState(false);
    const [canShow, showState] = useState(false);

    useEffect(() => {
        if (canShow) {
            document.body.style.overflow = "hidden";
            document.body.style.backgroundColor = "#0f1014e8";
        }
        else {
            document.body.style.overflow = "auto";
            document.body.style.backgroundColor = "";
        }
    });

    function getUserFeedback(e) {
        e.preventDefault();

        fetch("https://httpbin.org/post", {
            method: 'post',
            body: new FormData(e.target)
        }).then(
            response => {
                if (response.ok) {
                    return response.json();
                }
                else throw new Error("HTTP status " + response.status + " " + response.statusText);
            },
            reject => {
                throw new Error(reject);
            })
            .then(result => {
                changeStatePopUp();
            }).catch(e => {
                if (e.message === 'TypeError: Failed to fetch') {
                    alert("Something's gone wrong");
                }
            });

    }

    function changeStatePopUp() {
        showState(canShow ? false : true);
    }

    function fixPlaceHolder() {
        fixState(true);
    }

    return (
        <div className={"contact-form"}>
            <div className="contact-form__title">Залишити відгук</div>
            <form encType="multipart/form-data" method="POST" className="form" onSubmit={getUserFeedback}>
                <label className="label">
                    <input type="text" name="user-name" className="input input--focus" required onBlur={fixPlaceHolder} />
                    <span className={"label-text" + (canFix ? " label-text--fixed" : "")}>Ім’я</span>
                </label>

                <label className="label">
                    <input type="email" name="user-email" className="input input--focus" required onBlur={fixPlaceHolder} />
                    <span className={"label-text" + (canFix ? " label-text--fixed" : "")}>E-mail</span>
                </label>

                <label className="label">
                    <textarea name="user-comment" className="input input--long input--focus" required onBlur={fixPlaceHolder} />
                    <span className={"label-text" + (canFix ? " label-text--fixed" : "")}>Коментар</span>
                </label>

                <button className="button" type="submit">Відправити</button>
            </form>
            <div className={"pop-up" + (canShow ? " pop-up--show" : "")}>
                <button className="pop-up__button-exit" onClick={changeStatePopUp}><Exit className={"pop-up__svg"} /></button>
                <div className="pop-up__content">
                    <h3 className="pop-up__title">Ми дуже вдячні вам за ваш відгук!</h3>
                    <a className="pop-up__exit-link" onClick={changeStatePopUp}>Продовжити</a>
                </div>
            </div>
        </div>
    );
}