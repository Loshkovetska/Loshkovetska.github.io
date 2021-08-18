import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { subList } from "../../mockData/menu";

export default function SubList() {
    return (
        <ul className="sub-list">

            {
                subList.map((item, index) => (
                    <li className="sub-list__item" key={index}>
                        <NavLink to={item.to} className="sub-list__link">{item.title}</NavLink>
                    </li>
                ))
            }
        </ul>
    );
}