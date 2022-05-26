import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "hello",
    amount: 25,
    date: new Date(2021, 7, 14),
  },

  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },

  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addnewexpenseHandler = (expense) => {
    // console.log(expense);
    // console.log("in app.js");
    //setExpenses [expense,...expenses]  this is wroong we cant update it like this but through a function
    setExpenses((prevexpenses) => {
      return [expense, ...prevexpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddingNewExpense={addnewexpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
