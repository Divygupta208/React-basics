import React from "react";

export const ExpenseDate = ({ expdate }) => {
  let month = expdate.toLocaleString("en-US", { month: "long" });
  let day = expdate.toLocaleString("en-US", { day: "2-digit" });
  let year = expdate.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
