import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderTop } from "../Header/Header";
import Footer from "../Footer/Footer";
import { Minus, Plus, NextStep } from "../Svg/Svg";

import MultipleSelect from "../../common/MultipleSelect/MultipleSelect";
import PersonalTab from "../PersonalTab/PersonalTab";
import ContactTab from "../ContactTab/ContactTab";

import "../Registration/Registration.scss";

export default function Registration() {
    const [openTab, setTab] = useState(true);
    const [personalData, setData] = useState();

    function openChosenTab(isPersonal) {
        setTab(isPersonal);
    }

    function getPersonalData(data) {
        setData(data);
    }

    return (
        <>
            <header className="header header--regist">
                <div className="header__container">
                    <HeaderTop page={"registration"} openTab={openChosenTab} tab={openTab} />
                </div>
            </header>
            <main className="main">
                <div className="main__container">
                    <div className="main__registration registration">
                        <section className={"registration__tab personal-tab" + (openTab ? " registration__tab--show" : "")}>
                            <PersonalTab openTab={openChosenTab} getData={getPersonalData} />
                        </section>
                        <section className={"registration__tab  contact-tab" + (!openTab ? " registration__tab--show" : "")}>
                            <ContactTab personalData={personalData} />
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}