import React from "react";
import { Link } from "react-router-dom";

import { Youtube, Insta, Fb } from "../Svg/Svg";

export default function SocialNetworks(props) {

    return (
        <div className={props.class + " social-networks"}>
            <Link to="https://www.instagram.com/" className="social-networks__item">
                <Insta className={"insta social-networks__svg"} />
            </Link>
            <Link to="https://uk-ua.facebook.com/" className="social-networks__item">
                <Fb className={"fb social-networks__svg"} />
            </Link>
            <Link to="https://www.youtube.com/" className="social-networks__item">
                <Youtube className={"youtube social-networks__svg"} />
            </Link>
        </div>
    );
}