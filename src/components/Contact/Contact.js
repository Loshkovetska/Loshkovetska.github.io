import React, { useState } from "react";
import "../Contact/Contact.scss";
import Form from "../Form/Form";
import map from "../../img/map.png";
import { Link } from "react-router-dom";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import { Telephone, Message, Location } from "../Svg/Svg";

export default function Contact() {
    return (
        <section className="contact">
            <div className="contact__container">
                <div className="contact__info info">
                    <div className="info__title">Зв’язок з нами</div>
                    <div className="info__container">
                        <div className="info__col">
                            <div className="info__icon">
                                <Telephone className={"info__svg"} />
                            </div>
                            <Link className="info__link" href="tel:+380936202100">+38 093 620 21 00</Link>
                            <Link className="info__link" href="tel:+380986202100">+38 098 620 21 00</Link>
                        </div>
                        <div className="info__col">
                            <div className="info__icon">
                                <Message className={"info__svg"} />
                            </div>
                            <Link className="info__link" href="mailto:rodina.nikolaev@gmail.com">rodina.nikolaev@gmail.com</Link>
                        </div>
                        <SocialNetworks class={"info__col"} />
                    </div>
                </div>
                <div className="contact__map location">
                    <div className="location__address">
                        <div className="location__icon">
                            <Location className={"location__svg"} />
                        </div>
                        <Link href="#" className="location__link">м. Миколаїв вул. Московська 9</Link>
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