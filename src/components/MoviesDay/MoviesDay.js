import React, { useState } from "react";

import "../MoviesDay/MoviesDay.scss";
import DaysSlider from "../DaysSlider/DaysSlider";
import MovieList from "../MovieList/MovieList";

export default function MoviesDay() {
    const [date, setDate] = useState(`${new Date().getDate()},${new Date().getMonth() + 1}`);

    function showList(propDate) {
        setDate(propDate);
    }

    return (
        <section className="main__movies-day movies-day">
            <div className="movies-day__container">
                <DaysSlider showList={showList} />
                <MovieList dateForList={date || `${new Date().getDate()},${new Date().getMonth() + 1}`} />
            </div>
        </section>
    );
}