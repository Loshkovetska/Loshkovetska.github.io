import React from "react";
import Slider from "react-slick";

import "../DaysSlider/DaysSlider.scss";


export default function DaysSlider(props) {
    const settings = {
        infinite: false,
        speed: 600,
        slidesToShow: 12,
        slidesToScroll: 5,
        useTransform: false,
        variableWidth: true
    };

    function showMoviesOnThisDate(e) {
        props.showList(e.currentTarget.dataset["date"]);
    }

    function formDaysList() {
        const date = new Date();
        let currentDate = date.getDate();
        let currentDay = date.getDay();
        let month = date.getMonth() + 1;
        let countDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const days = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        const dateList = [];
        let key = 0;
        let flag = true;

        for (let i = currentDate; i <= countDays; i++) {
            if (currentDay === 6) currentDay = 0;

            dateList.push(getDay(i, days[currentDay], key, month));
            if (countDays === i && flag) {
                countDays = currentDate;
                month++;
                i = 0;
                flag = false;
            }
            currentDay++;
            key++;
        }

        return dateList;
    }


    function getDay(date, day, key, month) {
        return (
            <button className="day" data-date={[date, month]} key={key} onClick={showMoviesOnThisDate}>
                <span className="day__date">{date}</span>
                <span className="day__name">{day}</span>
            </button>
        );
    }


    return (
        <>

            <section className="days">
                <div className="days__title">Оберіть дату</div>
                <div className="days__list">
                    <Slider {...settings}>
                        {formDaysList().map(day => day)}
                    </Slider>
                </div>
            </section>

        </>
    );
}