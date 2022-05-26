import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// 2- parent component
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  //3-We can call a function in the new expense component

  //4- and we can pass data as a parameter.

  // 7 - and that's the value which we'll receive as a parameter here in new expense.

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    //console.log(expenseData);
    props.onAddingNewExpense(expenseData);
    setIsEditing(false);

  };

  const startEditing = () => {
    setIsEditing(true);
  };
  // 1 -child component can communicate up to the(ExpenseForm)
  const canceladding = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          oncancelEditing={canceladding}
        />
      )}
    </div>
  );
};

export default NewExpense;
