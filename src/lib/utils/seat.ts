export const generateSeatsMap = (side: "left" | "center" | "right" | "vip") => {
  const seatsRows = [];
  const seatsPerRow = side === "vip" ? 2 : 13;
  let countCols = side === "center" ? 14 : side === "vip" ? 12 : 9;
  let countNulls = 0;

  const type =
    side === "vip"
      ? "less-expensive"
      : side !== "center"
        ? "cheaper"
        : "less-cheaper";

  for (let i = 1; i <= seatsPerRow; i++) {
    let row = [];

    const colNum = side === "center" ? 11 : side === "right" ? 26 : 1;
    const rowNum = side === "vip" ? 13 + i : i;

    if (side === "left" || side === "right") {
      countNulls = i === 10 || i === 11 ? 1 : i >= 12 ? countNulls + 1 : 0;
    }

    for (let j = 0; j <= countCols; j++) {
      const empty =
        side === "left"
          ? j < countNulls
          : side === "right"
            ? j > countCols - countNulls
            : false;

      row.push(
        empty
          ? null
          : {
              id: [rowNum, j + colNum],
              type: type,
              tooltip: `${rowNum} row, ${j + colNum} seat`,
            }
      );
    }
    seatsRows.push(row);
  }
  return seatsRows;
};
