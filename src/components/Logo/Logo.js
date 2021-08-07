import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";

export default function Logo() {

    return (
        <Link to="/" className="logo">
            <img className="logo__img" src={logo} />
        </Link>
    );
}