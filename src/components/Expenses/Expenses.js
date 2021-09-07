import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setYear] = useState("2020");

  const yearFilterHandler = (yearFilter) => {
    setYear(yearFilter);
  };

  const filteredExpenseItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilter={yearFilterHandler} />
      <ExpensesChart expenses={filteredExpenseItems} />
      <ExpensesList items={filteredExpenseItems} />
      {/* Refer below */}
    </Card>
  );
};

export default Expenses;

/* This map function takes details form items and store it in expense parameter and then it assigns these values to the function, which now can dynamically work without hard coding all data as below */

/* <ExpenseItem
    title={props.items[0].title}
    amount={props.items[0].amount}
    date={props.items[0].date}
  />
  <ExpenseItem
    title={props.items[1].title}
    amount={props.items[1].amount}
    date={props.items[1].date}
  />
  <ExpenseItem
    title={props.items[2].title}
    amount={props.items[2].amount}
    date={props.items[2].date}
  ></ExpenseItem>
  <ExpenseItem
    title={props.items[3].title}
    amount={props.items[3].amount}
    date={props.items[3].date}
  ></ExpenseItem> */
