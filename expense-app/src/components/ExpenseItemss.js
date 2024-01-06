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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      >
        {expenses.map((item) => (
          <ExpenseItems
            key={item.title}
            expenseDate={item.date}
            expenseTitle={item.title}
            expenseAmount={item.amount}
            expenseLoc={item.location}
          ></ExpenseItems>
        ))}
      </ExpensesFilter>
    </Card>
  );
};

export default ExpenseItemss;
