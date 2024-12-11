import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../ContactTab/ContactTab.scss";

export default function ContactTab(props) {
    const history = useHistory();

    function validData(...args) {
        const [data1, data2, param] = args;

        if (data1.value !== data2.value) {
            param === "email" ?
                alert("E-mail не співпадають!") :
                alert("Паролі не співпадають!");
            return false;
        }
        return true;
    }

    function getUserData(e) {
        e.preventDefault();

        const form = e.target.elements;
        if (!validData(form["user-email"], form["user-repEmail"], "email") ||
            !validData(form["user-pass"], form["user-repPass"], "pass")) {
            return;
        }

        const properties = {
            email: form["user-email"].value,
            tel: form["user-tel"].value,
            password: form["user-pass"].value
        };

        const result = Object.assign(properties, props.personalData);
        postOnServer(result);
    }

    function postOnServer(data) {
        fetch("https://httpbin.org/post", {
            method: 'post',
            body: JSON.stringify(data)
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
                alert(`${result.json["name"]} ${result.json["surname"]} раді Вас вітати у нашому кіноклубі!`);
                history.push("/home");
            }).catch(e => {
                if (e.message === 'TypeError: Failed to fetch') {
                    alert("Something's gone wrong");
                }
            });
    }

    return (
        <>
            <form className="form form--contact" method="POST" encType="multipart/form-data" onSubmit={getUserData}>
                <div className="contact-tab__sub-title">Як з вами зв’язатися</div>
                <label className="label">
                    <input type="text" name="user-email" placeholder="E-mail" className="input input--focus" required autoComplete="off" />
                </label>
                <label className="label">
                    <input type="text" name="user-repEmail" placeholder="Підтвердіть E-mail" className="input input--focus" required autoComplete="off" />
                </label>
                <label className="label">
                    <input
                        type="tel" name="user-tel"
                        className="input input--focus"
                        placeholder="+380XXXXXXXXX"
                        required autoComplete="off" />
                </label>
                <div className="contact-tab__sub-title">Встановіть пароль</div>
                <label className="label">
                    <input type="password" name="user-pass" placeholder="Пароль" className="input input--focus" required autoComplete="off" />
                </label>
                <label className="label">
                    <input type="password" name="user-repPass" placeholder="Підтвердіть пароль" className="input input--focus" required autoComplete="off" />
                </label>
                <label className="label">
                    <input type="checkbox" name="remember" className="checkbox" />
                    <span className="label-text">Я хочу отримувати розслику від “CinemaPark” </span>
                </label>
                <label className="label">
                    <input type="checkbox" name="remember" className="checkbox" />
                    <span className="label-text">Я ознайомлений(на) та приймаю правила ТОВ “CinemaPark”</span>
                </label>
                <button className="button-sub">Зареєструватися</button>
            </form>
        </>
    );
}