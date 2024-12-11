import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import "./MapSeats.scss";


import {
    seatsRowsSideLeft,
    seatsRowsSideRight,
    seatsRowsCenter,
    vipSeats,
    seatsVariants
} from "../../mockData/seats";


const selectedSeats = [];

export default function MapSeats(props) {
    function getVariants() {
        return (
            <div className="variants">
                {
                    seatsVariants.map((place, index) => (
                        <div className="variants__item" key={index}>
                            <div className="variants__item-icon seat-svg">{place.icon} </div>
                            <span className="variants__item-price">{place.price} грн</span>
                        </div>
                    ))
                }
            </div>
        );
    }

    function buildMap(array, flag) {
        return (
            array.map((row, index) => (
                <div className="seats-map__row" key={index}>
                    {(flag) ? <div className="seats-map__row-num" key={"num" + index}>{index + 1}</div> : ""}
                    {
                        row.map(({ tooltip, id, seat, type }, index) => (
                            (id !== null) ?
                                <button
                                    className="seat"
                                    key={index}
                                    data-typeseat={type}
                                    data-tip={tooltip} data-id={id} onClick={addSeat}>
                                    {seat}
                                </button> : <div className="seat" key={index}></div>
                        ))
                    }
                </div>

            ))
        );
    }

    function addSeat(e) {
        let target = e.currentTarget;
        let idSeat = target.dataset.id.split(",");
        let flag = selectedSeats.some(item =>
            item.seat === +idSeat[1] &&
            item.row === +idSeat[0]);

        if (!flag) {

            selectedSeats.push({
                seat: +idSeat[1],
                row: +idSeat[0],
                type: target.dataset.typeseat
            });
        }
        else {
            let indexOF = 0;
            selectedSeats.forEach((item, index) => {
                if (item.seat === +idSeat[1] && item.row === +idSeat[0])
                    indexOF = index;
            });

            selectedSeats.splice(indexOF, 1);
        }

        props.getTickets(selectedSeats);

    }
    return (
        <section className="seats">
            <div className="seats__title">Оберіть місця</div>
            <div className="seats__map seats-map">
                {getVariants()}
                <div className="seats-map__top">
                    <span className="seats-map__col-name">Ряд</span>
                    <span className="seats-map__col-name">Екран</span>
                    <span className="seats-map__col-name">Ряд</span>
                </div>
                <div className="seats-map__content">
                    <div className="seats-map__general">
                        <div className="seats-map__col-left">
                            {buildMap(seatsRowsSideLeft, true)}
                        </div>
                        <div className="seats-map__col-center">
                            {buildMap(seatsRowsCenter, false)}
                        </div>
                        <div className="seats-map__col-right">
                            {
                                seatsRowsSideRight.map((row, index) => (
                                    <div className="seats-map__row" key={"num" + index}>
                                        {
                                            row.map(({ tooltip, id, seat, type }, index) => (
                                                (id !== null) ?
                                                    <button
                                                        className="seat"
                                                        key={index}
                                                        data-tip={tooltip} data-id={id}
                                                        data-typeseat={type} onClick={addSeat}>
                                                        {seat}
                                                    </button> : <div className="seat" key={index}></div>
                                            ))
                                        }
                                        <div className="seats-map__row-num" key={"num" + index}>{index + 1}</div>
                                    </div>

                                ))
                            }
                        </div>

                    </div>
                    <div className="seats-map__vip">
                        {buildMap(vipSeats)}
                    </div>
                </div>

            </div>
            <ReactTooltip />
        </section >
    );
}