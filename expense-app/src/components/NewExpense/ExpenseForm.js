import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleFormsubmit = (e) => {
    e.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(enteredData);
  };

  return (
    <form onSubmit={handleFormsubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={handleDateChange} />
        </div>
        /
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
