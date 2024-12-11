import React, { useState } from "react";
import { Search as SearchSvg } from "../Svg/Svg";

import "../Search/Search.scss";
import SearchModal from "../SearchModal/SearchModal";


export default function Search() {
    const [isOpen, setOpen] = useState(false);

    function changeModalState() {
        setOpen(isOpen ? false : true);
    }

    return (
        <>
            <button className="header__search  header-search" onClick={changeModalState}>
                <SearchSvg className={"header__svg"} />
            </button>
            <SearchModal isOpen={isOpen} changeState={changeModalState} />
        </>

    );
}