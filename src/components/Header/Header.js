import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Header/Header.scss";

import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import Login from "../Login/Login";
import Search from "../Search/Search";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <HeaderTop />
                <Slider isPresale={false} />
            </div>
        </header>
    );
}

export function HeaderTop(props) {
    function getTabsByPage(page) {
        return (
            (page === "registration")
                ? getTabsOfRegistration()
                : getTabsOfStore()
        );
    }


    function getTabsOfStore() {
        return (
            <div className="header__tabs tabs-header">
                <Link className={"tabs-header__link" + (props.storeTab === 1 ? " tabs-header__link--active" : "")}>01 Обрати місце</Link>
                <Link className={"tabs-header__link" + (props.storeTab === 2 ? " tabs-header__link--active" : "")}>02 Магазин</Link>
                <Link className={"tabs-header__link" + (props.storeTab === 3 ? " tabs-header__link--active" : "")}>03 Оплата</Link>
            </div>
        );
    }

    function getTabsOfRegistration() {
        return (
            <div className="header__tabs tabs-header">
                <Link className={"tabs-header__link" + (props.tab ? " tabs-header__link--active" : "")} >01 Персональні дані</Link>
                <Link className={"tabs-header__link" + (!props.tab ? " tabs-header__link--active" : "")}>02 Контактні дані і пароль</Link>
            </div>
        );
    }



    return (
        <div className="header__top">
            <Navigation />
            {props.page ? getTabsByPage(props.page) : ""}
            <div className="header__func-block">
                <Login />
                <Search />
            </div>
        </div>
    );
}