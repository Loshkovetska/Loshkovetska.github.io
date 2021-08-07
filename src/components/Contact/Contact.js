import React, { useState } from "react";
import "../Contact/Contact.scss";
import Form from "../Form/Form";
import map from "../../img/map.png";

import { Youtube, Insta, Fb, Telephone, Message, Location } from "../Svg/Svg";

export default function Contact() {

    return (
        <section className="main__contact contact">
            <div className="contact__container">
                <div className="contact__info info">
                    <div className="info__title">Зв’язок з нами</div>
                    <div className="info__container">
                        <div className="info__col">
                            <div className="info__icon">
                                <Telephone className={"info__svg"} />
                            </div>
                            <a className="info__link" href="tel:+380936202100">+38 093 620 21 00</a>
                            <a className="info__link" href="tel:+380986202100">+38 098 620 21 00</a>
                        </div>
                        <div className="info__col">
                            <div className="info__icon">
                                <Message className={"info__svg"} />
                            </div>
                            <a className="info__link" href="mailto:rodina.nikolaev@gmail.com">rodina.nikolaev@gmail.com</a>
                        </div>
                        <div className="info__col social-networks">
                            <a href="https://www.instagram.com/" className="social-networks__item">
                                <Insta className={"insta social-networks__svg"} />
                            </a>
                            <a href="https://uk-ua.facebook.com/" className="social-networks__item">
                                <Fb className={"fb social-networks__svg"} />
                            </a>
                            <a href="https://www.youtube.com/" className="social-networks__item">
                                <Youtube className={"youtube social-networks__svg"} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact__map location">
                    <div className="location__address">
                        <div className="location__icon">
                            <Location className={"location__svg"} />
                        </div>
                        <a href="#" className="location__link">м. Миколаїв вул. Московська 9</a>
                    </div>
                    <div className="location__map">
                        <img src={map} alt="map" className="image-map" />
                    </div>
                </div>
                <Form />
            </div>
        </section>
    );
}