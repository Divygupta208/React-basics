import React from "react";
import ExpenseItems from "./ExpenseItems";

const ExpenseItemss = ({ expenses }) => {
  return (
    <div>
      {expenses.map((item) => (
        <ExpenseItems
          expenseDate={item.date}
          expenseTitle={item.title}
          expenseAmount={item.amount}
          expenseLoc={item.location}
        ></ExpenseItems>
      ))}
    </div>
  );
};

export default ExpenseItemss;
