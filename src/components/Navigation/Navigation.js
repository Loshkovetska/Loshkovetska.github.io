import React, { useState } from "react";
import "../Navigation/Navigation.scss";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import SubList from "../SubList/SubList";
import { menu } from "../../mockData/menu";

export default function Navigation() {
    const [isOpen, setState] = useState('');
    const [isOpenSubList, openList] = useState(false);

    function openSubList() {
        openList(!isOpenSubList ? true : false);
    }

    function openMenu(isOpen) {
        setState(isOpen);
    }

    return (
        <nav className={"navigation" + (isOpen ? " navigation--open-menu" : "")}>
            <div className="navigation__top">
                <Hamburger openMenu={openMenu} />
                <Logo />
            </div>
            <ul className="navigation__list">
                {
                    menu.map((item, index) => (
                        item.isOpened ?
                            <li className={"navigation__item navigation__item--list" +
                                (isOpenSubList ? " navigation__item--open-list" : "")} key={index}>
                                <NavLink to={item.to} onClick={() => openSubList()}
                                    className="navigation__link">{item.title}</NavLink>
                                <SubList />
                            </li>
                            : <li className="navigation__item" key={index}>
                                <NavLink to={item.to}
                                    className="navigation__link">{item.title}</NavLink>
                            </li>
                    ))
                }
            </ul>
            <SocialNetworks class={"navigation__social-networks"} />
            <div className="navigation__langs langs">
                <Link to="/ua" className="langs__link">Укр</Link>
                <Link to="/ru" className="langs__link">Рус</Link>
                <Link to="/en" className="langs__link">Eng</Link>
            </div>
        </nav>
    );
}