import React from "react";
import "./ExpenseDate.css";

export const ExpenseDate = ({ expdate }) => {
  let month = expdate.toLocaleString("en-US", { month: "long" });
  let day = expdate.toLocaleString("en-US", { day: "2-digit" });
  let year = expdate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
