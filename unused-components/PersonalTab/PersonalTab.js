import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Minus, Plus, NextStep } from "../Svg/Svg";

import MultipleSelect from "../../common/MultipleSelect/MultipleSelect";

import "../PersonalTab/PersonalTab.scss";

export default function PersonalTab(props) {
    const [canShow, setShow] = useState(true);
    const [isShow, setShowInput] = useState(false);

    function stateAddedInput(e) {
        e.preventDefault();
        setShow(!canShow ? true : false);
        setShowInput(!isShow ? true : false);
    }

    function getUserData(e) {
        e.preventDefault();
        const form = e.target.elements;

        const data = {
            name: form["user-name"].value,
            surname: form["user-surname"].value,
            userName: form["user-login"].value,
            birthDay: form["user-birthday"].value,
            closedPersonBirthDay: form["closed-person-birthday"].value,
            gender: form["gender"].value,
            lovedMovies: form["loved-genre"].value,
            photo: form["user-photo"].value
        };
        props.openTab(false);
        props.getData(data);
    }

    function convertInputTextToDate(e) {
        if (e.target.type === "text") {
            e.target.type = "date";
        }
        else e.target.type = "text";
    }

    return (
        <>
            <div className="personal-tab__title">Розкажіть нам про себе</div>
            <form className="form form--personal" method="POST" encType="multipart/form-data" onSubmit={getUserData}>
                <input type="file" className="upload-file" name="user-photo" />
                <label className="label">
                    <input type="text" name="user-surname" placeholder="Прізвище" className="input input--focus" required autoComplete="off" />
                </label>
                <label className="label">
                    <input type="text" name="user-name" placeholder="Ім’я" className="input input--focus" required autoComplete="off" />
                </label>
                <label className="label">
                    <input type="text" name="user-login" placeholder="Ім’я користувача" className="input input--focus" required autoComplete="off" />
                </label>
                <label className="label">
                    <input type="text" onFocus={convertInputTextToDate} onBlur={convertInputTextToDate} name="user-birthday" placeholder="Дата народження" className="input input--focus" required autoComplete="off" />
                    <button className={"button-date" + (canShow ? " button-date--show" : "")} onClick={stateAddedInput}><Plus /></button>
                </label>
                <label className={"label label-date" + (isShow ? " label-date--show" : "")}>
                    {
                        isShow ? <input
                            type="text"
                            onFocus={convertInputTextToDate}
                            onBlur={convertInputTextToDate}
                            name="closed-person-birthday"
                            placeholder="Дата народження близької людини"
                            className="input input--focus" autoComplete="off" /> :
                            <input
                                type="text"
                                name="closed-person-birthday"
                                placeholder="Дата народження близької людини"
                                className="input input--focus" />
                    }

                    <button className="button-date button-date--show" onClick={stateAddedInput}><Minus /></button>
                </label>
                <label className="label">
                    <span className="label-text">Ваша стать</span>
                    <div className="radio-list">
                        <div className="radio">
                            <label className="label">
                                <input type="radio" name="gender" className="radio__btn" required value="Чоловіча" defaultChecked />
                                <span className="radio-text">Чоловіча</span>
                            </label>
                        </div>
                        <div className="radio">
                            <label className="label">
                                <input type="radio" name="gender" className="radio__btn" required value="Жіноча" />
                                <span className="radio-text">Жіноча</span>
                            </label>
                        </div>
                    </div>
                </label>
                <label className="label">
                    <MultipleSelect />
                </label>
                <button className="button-next" type="submit">
                    <span className="button-text">Продовжити</span>
                    <NextStep />
                </button>
            </form>
        </>
    );
}