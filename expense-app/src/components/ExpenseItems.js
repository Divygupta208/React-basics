import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItems({
  expenseDate,
  expenseTitle,
  expenseAmount,
  expenseLoc,
}) {
  return (
    <div className="expense-item">
      <ExpenseDate expdate={expenseDate}></ExpenseDate>
      <ExpenseDetails
        amount={expenseAmount}
        loc={expenseLoc}
        title={expenseTitle}
      ></ExpenseDetails>
    </div>
  );
}

export default ExpenseItems;
