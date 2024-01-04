import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "./UI/Card";

const ExpenseItemss = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItems
          key={item.title}
          expenseDate={item.date}
          expenseTitle={item.title}
          expenseAmount={item.amount}
          expenseLoc={item.location}
        ></ExpenseItems>
      ))}
    </Card>
  );
};

export default ExpenseItemss;
