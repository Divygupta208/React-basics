import React from "react";

const ExpenseDetails = ({ title, loc, amount }) => {
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-location">{loc}</div>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
};

export default ExpenseDetails;
