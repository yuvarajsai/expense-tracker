import { useState } from "react";
//We are using state in here because react does not re load just due to some change occured in variables(which in our case is new expense coming into our App.js expense variable. And this must be dymaically added. So we need to use states)
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
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
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const NewExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    //Here to the array of existing expenses, we take the new expenses form NewExpenseDataHandler and pass them in setExpenses to add this new expense and update the state of this component. But we have to be careful, we are not overriding the previous state expenses array, instead we are updating the array with new data. So we are storing the data in prevExpenses and adding new data to it and returning the new data.
  };
  return (
    <div>
      <NewExpense onNewExpenseData={NewExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
