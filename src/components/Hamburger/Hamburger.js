import React, { useState } from "react";
import "../Hamburger/Hamburger.scss";

export default function Hamburger(props) {
    const [isOpen, changeState] = useState(false);

    function openMenu() {
        changeState(isOpen ? false : true);
        props.openMenu(isOpen ? false : true);
    }

    return (
        <button className={"hamburger" + (isOpen ? " hamburger--close" : "")} onClick={openMenu}>
            <div className="hamburger__dash"></div>
            <div className="hamburger__dash"></div>
            <div className="hamburger__dash"></div>
        </button>
    );
}