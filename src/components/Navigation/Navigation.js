import React, { useState } from "react";
import "../Navigation/Navigation.scss";

import { Youtube, Insta, Fb } from "../Svg/Svg";

import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";

export default function Navigation() {
    const [isOpen, setState] = useState('');
    const [isOpenSubList, openList] = useState(false);

    function openMenu(isOpen) {
        setState(isOpen);
    }

    function openSubList() {
        openList(!isOpenSubList ? true : false);
    }

    return (
        <nav className={"navigation" + (isOpen ? " navigation--open-menu" : "")}>
            <div className="navigation__top">
                <Hamburger openMenu={openMenu} />
                <Logo />
            </div>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a href="/account" className="navigation__link">Мій профіль</a>
                </li>
                <li className="navigation__item">
                    <a href="/news" className="navigation__link">Новини</a>
                </li>
                <li className="navigation__item">
                    <a href="/store" className="navigation__link">Кіномаркет</a>
                </li>
                <li className="navigation__item">
                    <a href="/discounts" className="navigation__link">Акції та знижки</a>
                </li>
                <li
                    className={"navigation__item navigation__item--list" +
                        (isOpenSubList ? " navigation__item--open-list" : "")}
                >
                    <a
                        className="navigation__link"
                        onClick={() => openSubList()}> Наші проекти</a>
                    <ul className="navigation__sub-list sub-list">
                        <li className="sub-list__item">
                            <a href="/museum" className="sub-list__link">Музей кіно</a>
                        </li>
                        <li className="sub-list__item">
                            <a href="/school" className="sub-list__link">Школа кіно</a>
                        </li>
                        <li className="sub-list__item">
                            <a href="/gallery" className="sub-list__link">Фотогалерея</a>
                        </li>
                        <li className="sub-list__item">
                            <a href="/club" className="sub-list__link">Кіноклуб</a>
                        </li>
                        <li className="sub-list__item">
                            <a href="/finding" className="sub-list__link">Краудфайндінг</a>
                        </li>
                    </ul>
                </li>
                <li className="navigation__item">
                    <a href="/about" className="navigation__link">Про нас</a>
                </li>
                <li className="navigation__item">
                    <a href="/contacts" className="navigation__link">Контакти</a>
                </li>
            </ul>
            <div className="navigation__social-networks social-networks">
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
            <div className="navigation__langs langs">
                <a href="/ua" className="langs__link">Укр</a>
                <a href="/ru" className="langs__link">Рус</a>
                <a href="/en" className="langs__link">Eng</a>
            </div>
        </nav>
    );
}