import React from "react";
import "../Footer/Footer.scss";
import { Insta, Fb, Youtube } from "../Svg/Svg";
import appStore from "../../img/appStore.png";
import googlePlay from "../../img/googlePlay.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__app-links app-links">
                    <a className="app-links__item"><img className="link-image" src={googlePlay} alt="google-play" /></a>
                    <a className="app-links__item"><img className="link-image" src={appStore} alt="app-store" /></a>
                </div>
                <ul className="footer__list footer-list">
                    <li className="footer-list__item">
                        <a className="footer-list__link">Договір “Оферти”</a>
                    </li>
                    <li className="footer-list__item">
                        <a className="footer-list__link">Правила кінотеатру</a>
                    </li>
                    <li className="footer-list__item">
                        <a className="footer-list__link">Зворотній зв’язок</a>
                    </li>
                    <li className="footer-list__item">
                        <a className="footer-list__link">Про нас в пресі</a>
                    </li>
                    <li className="footer-list__item">
                        <a className="footer-list__link">Команда кінотеатру</a>
                    </li>
                    <li className="footer-list__item">
                        <a className="footer-list__link"> Повернення квитків</a>
                    </li>
                </ul>
                <div className="footer__social-networks social-networks">
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
        </footer>
    );
}