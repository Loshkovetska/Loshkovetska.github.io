import React from "react";
import "./ListDates.scss";
import { Link } from "react-router-dom";

export default function ListDates(props) {
    function goToBuyTicket(e) {
        props.formRoute(e.target.parentNode.dataset.date);
    }

    function formDaysList() {
        const dates = props.dates;
        const dateList = [];
        const days = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        let key = 0;

        for (let i = 0; i < dates.length; i++) {
            let currentDay = new Date(`2021-${dates[i][1]}-${dates[i][0]}`).getDay();
            dateList.push(getDay(dates[i][0], days[currentDay], key, dates[i][1]));
            key++;
        }

        return dateList;
    }


    function getDay(date, day, key, month) {
        return (
            <button className="day" data-date={[date, month]} key={key} onClick={goToBuyTicket} >
                <span className="day__date">{date}</span>
                <span className="day__name">{day}</span>
            </button >
        );
    }
    return (
        <div className="days">
            <div className="days__title">Оберіть день</div>
            <div className="days__list">
                {formDaysList()}
            </div>
        </div>
    );
}