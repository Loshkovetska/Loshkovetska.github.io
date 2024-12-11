import React from "react";
import { movieData as sliderData } from "../../mockData/movieData";
import NextMovies from "../NextMovies/NextMovies";
import CurrentMovies from "../CurrentMovies/CurrentMovies";
import("../Slider/Slider.scss");

export default function Slider(props) {
    const flag = props.isPresale;

    function getFilterData(flag) {

        return (
            !flag
                ? sliderData.filter(movie => movie.tags[0] !== "PRESALE")
                : sliderData.filter(movie => movie.tags[0] === "PRESALE")
        );
    }

    return (
        <>
            {
                flag ?
                    <NextMovies filteredData={getFilterData(flag)} /> :
                    <CurrentMovies filteredData={getFilterData(flag)} />
            }
        </>
    );
}