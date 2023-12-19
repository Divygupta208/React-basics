import React from "react";
import "./ExpenseItems.css";

function ExpenseItems({
  expenseDate,
  expenseTitle,
  expenseAmount,
  expenseLoc,
}) {
  return (
    <div className="expense-item">
      <h1>{expenseDate}</h1>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-location">{expenseLoc}</div>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
