import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.scss";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import appStore from "../../img/appStore.png";
import googlePlay from "../../img/googlePlay.png";
import footerMenu from "../../mockData/footerMenu";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__app-links app-links">
                    <Link className="app-links__item"><img className="link-image" src={googlePlay} alt="google-play" /></Link>
                    <Link className="app-links__item"><img className="link-image" src={appStore} alt="app-store" /></Link>
                </div>
                <ul className="footer__list footer-list">
                    {
                        footerMenu.map((item, index) => (
                            <li className="footer-list__item" key={index}>
                                <Link className="footer-list__link" to={item.to}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <SocialNetworks class={"footer__social-networks"} />
            </div>
        </footer>
    );
}