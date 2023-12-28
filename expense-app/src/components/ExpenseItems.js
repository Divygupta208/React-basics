import React, { useState } from "react";
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
  const [title, setTitle] = useState(expenseTitle);

  const handleTitleChange = (e) => {
    setTitle("Edited");
  };

  const [amount, setAmount] = useState(expenseAmount);

  const handleAmountChange = () => {
    setAmount("$100");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expdate={expenseDate}></ExpenseDate>
      <ExpenseDetails
        amount={amount}
        loc={expenseLoc}
        title={title}
      ></ExpenseDetails>
      <button onClick={handleTitleChange}>change</button>
      <button onClick={handleAmountChange}>changeAmount</button>
    </Card>
  );
}

export default ExpenseItems;
