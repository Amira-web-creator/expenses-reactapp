import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [choosenyear, setChoosenYear] = useState("2020");

  const chooseyear = (thechoosenyear) => {
    console.log(thechoosenyear);
    setChoosenYear(thechoosenyear);
  };

  const filteredExpenses = props.items.filter((oneexpense) => {
    return oneexpense.date.getFullYear().toString() === choosenyear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={choosenyear} onchooseyear={chooseyear} />

        {/* {props.items.map((expense) => (
          <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* {props.items.map((expense) => (
          <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* <h2>all</h2>
         {props.items.map((expense) => (
          <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* <Expenseitem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <Expenseitem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <Expenseitem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <Expenseitem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
        <Expenseitem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
