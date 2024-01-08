import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "./UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseItemss = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((item) => (
        <ExpenseItems
          key={item.id}
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
