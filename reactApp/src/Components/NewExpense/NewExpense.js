import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const showFormHandler = () => {
    setFormVisibility(true)
  }
  const hideFormHandler = () => {
    setFormVisibility(false)
  }
  return (
    <div className="new-expense">
      {!formVisibility && <button type="button" onClick={showFormHandler}>Add New Expenses</button>}
      {formVisibility && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler} />}
    </div>
  );
};
export default NewExpense;
