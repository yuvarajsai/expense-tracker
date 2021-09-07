import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

//Our return function should always return jsx code in a single div, which could contain multiple nested divs in it. But it must return only a single div as react works only in that way!

//Every code down below might look like HTML, but it is not! It is a mixture of HTML, JS and might be a little bit of CSS. So, this is a jsx syntax code.

//(JSX -> JS-XML -> JavaScript-Extensible Markup Language)

//Some attributes have same names in jsx, but some do not. Like className! Because class is a reserved keyword in JS. So, we use className in jsx! (Though our code works by using class, but it is best to use className)

// const expenseDate = new Date(2001, 8, 15);
// const expenseTitle = "Nagnath - Bombay Chudwa";
// const expensePrice = 120;

//const [title, setTitle] = useState(props.title);
// const clickHandler = () => {
//   setTitle("Budget bro!");
//   console.log("Hell Yeah!");
// };

//Now we have created a variable which should change h2 to "Hell Yeah", when tapped on change title. This change can be seen in console but not in browser. Because react renders only once and it it does not change for a click or for a change in variable. So, inorder to acheive it we need to make react run again

/* we are now funneling the data which we got from props attribute to another component as an attribute */

/* <div>{props.date.toISOString()}</div> */
/* being a date object we cannot directly write expenseDate. So we can show in this way for time being */
