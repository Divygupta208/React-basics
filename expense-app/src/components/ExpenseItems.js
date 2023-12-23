import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";

function ExpenseItems({
  expenseDate,
  expenseTitle,
  expenseAmount,
  expenseLoc,
}) {
  return (
    <Card className="expense-item">
      <ExpenseDate expdate={expenseDate}></ExpenseDate>
      <ExpenseDetails
        amount={expenseAmount}
        loc={expenseLoc}
        title={expenseTitle}
      ></ExpenseDetails>
    </Card>
  );
}

export default ExpenseItems;
