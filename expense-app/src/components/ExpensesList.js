import React from "react";
import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  if (filteredExpenses.length === 1) {
    return (
      <>
        {filteredExpenses.map((item) => (
          <ExpenseItems
            key={item.id}
            expenseDate={item.date}
            expenseTitle={item.title}
            expenseAmount={item.amount}
            expenseLoc={item.location}
          ></ExpenseItems>
        ))}
        <h2 className="expenses-list__fallback">
          Only One Item Found Please add More...
        </h2>
      </>
    );
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => (
        <ExpenseItems
          key={item.id}
          expenseDate={item.date}
          expenseTitle={item.title}
          expenseAmount={item.amount}
          expenseLoc={item.location}
        ></ExpenseItems>
      ))}
    </ul>
  );
};

export default ExpensesList;
