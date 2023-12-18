import React from "react";
import "./ExpenseItems.css";

function ExpenseItems() {
  const expenseDate = new Date(2023, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 297.67;
  const expenseLocation = "N-21 , S-41 , New York";
  return (
    <div className="expense-item">
      <h1>
        {`${expenseDate.getDate()}-
          ${expenseDate.getDay()}-
          ${expenseDate.getFullYear()}`}
      </h1>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-location">{expenseLocation}</div>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
