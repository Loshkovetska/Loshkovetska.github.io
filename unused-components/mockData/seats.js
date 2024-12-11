import React from "react";
import { Seat, BigSeat } from "./../components/Svg/Svg";

export const seatsVariants = [
    {
        title: "cheaper",
        icon: <Seat className={" seat-svg seat-svg--cheaper"} />,
        price: 80
    },
    {
        title: "less-cheaper",
        icon: <Seat className={" seat-svg seat-svg--less-cheaper"} />,
        price: 90
    },

    {
        title: "less-expensive",
        icon: <Seat className={" seat-svg seat-svg--less-expensive"} />,
        price: 120
    },
    {
        title: "expensive",
        icon: <BigSeat className={" seat-svg seat-svg--expensive"} />,
        price: 330
    },
];

export const seatsRowsSideLeft = [];
export const seatsRowsSideRight = [];
export const seatsRowsCenter = [];

export const vipSeats = [
    [{
        id: [1, 1],
        type: "expensive",
        seat: <BigSeat className={"seat-svg seat-svg--expensive"} />,
        tooltip: `1 ряд, 1 місце`
    }
        ,
    { id: null, seat: null, tooltip: null, type: null },
    { id: null, seat: null, tooltip: null, type: null },
    {
        id: [1, 2],
        type: "less-expensive",
        seat: <Seat className={"seat-svg seat-svg--less-expensive"} />,
        tooltip: `1 ряд, 2 місце`
    },
    {
        id: [1, 3],
        type: "less-expensive",
        seat: <Seat className={"seat-svg seat-svg--less-expensive"} />,
        tooltip: `1 ряд, 3 місце`
    },
    {
        id: [1, 4],
        type: "less-expensive",
        seat: <Seat className={"seat-svg seat-svg--less-expensive"} />,
        tooltip: `1 ряд, 4 місце`
    },
    {
        id: [1, 5],
        type: "less-expensive",
        seat: <Seat className={"seat-svg seat-svg--less-expensive"} />,
        tooltip: `1 ряд, 5 місце`
    },
    { id: null, seat: null, tooltip: null, type: null },
    { id: null, seat: null, tooltip: null, type: null },
    {
        id: [1, 6],
        type: "expensive",
        seat: <BigSeat className={"seat-svg seat-svg--expensive"} />,
        tooltip: `1 ряд, 6 місце`
    }
    ]
];

let countCols = 9;
let seat, row;
for (let i = 1; i <= 13; i++) {
    seat = {};
    row = [];

    if (i > 9 && i !== 11) countCols--;

    for (let j = 1; j <= countCols; j++) {
        seat = {
            id: [i, j],
            type: "cheaper",
            seat: <Seat className={"seat-svg seat-svg--cheaper"} />,
            tooltip: `${i}ряд, ${j} місце`
        };
        row.push(seat);
    }
    seatsRowsSideRight.push(row);
}

countCols = 14;
for (let i = 1; i <= 13; i++) {
    row = [];

    for (let j = 1; j <= countCols; j++) {
        seat = {
            id: [i, j],
            type: "less-cheaper",
            seat: <Seat className={"seat-svg seat-svg--less-cheaper"} />,
            tooltip: `${i}ряд, ${j} місце`
        };
        row.push(seat);
    }
    seatsRowsCenter.push(row);
}

countCols = 9;
let countNulls = 0;
for (let i = 1; i <= 13; i++) {
    row = [];
    if (i === 10 || i === 11) {
        countNulls = 1;
        row[0] = { id: null, seat: null, tooltip: null, type: null };
    }

    else if (i >= 12) {
        countNulls++;
        for (let i = 0; i < countNulls; i++) {
            row[i] = { id: null, seat: null, tooltip: null, type: null };
        }
    }

    for (let j = 1; j <= countCols - countNulls; j++) {
        seat = {
            id: [i, j],
            type: "cheaper",
            seat: <Seat className={"seat-svg seat-svg--cheaper"} />,
            tooltip: `${i}ряд, ${j} місце`
        };
        row.push(seat);
    }
    seatsRowsSideLeft.push(row);
}




for (let i = 1; i <= 2; i++) {
    row = [];
    for (let j = 1; j <= 12; j++) {
        seat = {
            id: [i, j],
            type: "less-expensive",
            seat: <Seat className={"seat-svg seat-svg--less-expensive"} />,
            tooltip: `${i} ряд, ${j} місце`
        };

        row.push(seat);
    }

    vipSeats.push(row);
}
