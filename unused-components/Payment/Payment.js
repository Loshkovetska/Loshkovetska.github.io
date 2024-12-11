import React, { useState } from "react";
import { GooglePay, Privat24 } from "../Svg/Svg";
import "./Payment.scss";

export default function Payment(props) {
    let email, tel, name = "";
    function getName(e) {
        name = e.target.value;
    }

    function getEmail(e) {
        email = e.target.value;
    }

    function getTel(e) {
        tel = e.target.value;
    }

    function pay(e) {
        e.preventDefault();
        const output = `${name}, ваші квитки вже надіслені на вашу почту ${email}`;
        alert(output);
    }

    return (
        <>
            <section className="payments">
                <div className="payments__methods payments-methods">
                    <div className="payments-methods__title">Оберіть спосіб оплати</div>
                    <div className="payments-methods__list">
                        <div className="payments-methods__item">
                            <GooglePay />
                        </div>
                        <div className="payments-methods__item">
                            <Privat24 />
                        </div>
                    </div>
                </div>
                <div className="payments__get-tickets get-tickets">
                    <div className="get-tickets__title">Куди надіслати квитки:</div>
                    <form className="get-tickets__form">
                        <label className="label">
                            <input type="text" name="user-name" placeholder="Ім’я" className="input input--focus" required autoComplete="off"
                                onChange={getName} />
                        </label>
                        <label className="label">
                            <input type="email" name="email" placeholder="Email" className="input input--focus" onChange={getEmail} />
                        </label>
                        <label className="label">
                            <input type="tel" name="tel" placeholder="+380XXXXXXXXX" className="input input--focus" onChange={getTel} />
                        </label>
                        <label className="label label--checkbox">
                            <input type="checkbox" name="agree" className="checkbox" required />
                            <span className="label-text">Я погоджуюся з договором “Оферти”</span>
                        </label>
                        <button className="button" onClick={pay}>Оплатити</button>
                    </form>
                </div>
            </section>
        </>
    );
}