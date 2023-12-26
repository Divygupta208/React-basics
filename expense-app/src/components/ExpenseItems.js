import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./UI/Card";

function ExpenseItems({
  expenseDate,
  expenseTitle,
  expenseAmount,
  expenseLoc,
}) {
  const handleDelete = (e) => {
    console.log("button Clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expdate={expenseDate}></ExpenseDate>
      <ExpenseDetails
        amount={expenseAmount}
        loc={expenseLoc}
        title={expenseTitle}
      ></ExpenseDetails>
      <button onClick={handleDelete}>X</button>
    </Card>
  );
}

export default ExpenseItems;
