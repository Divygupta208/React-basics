import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "./Card";

const ExpenseItemss = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItems
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
