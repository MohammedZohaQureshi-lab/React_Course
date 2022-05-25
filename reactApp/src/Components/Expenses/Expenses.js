import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilterValue] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterValue(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
