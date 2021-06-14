import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../FilterExpense/ExpensesFilter";
import {useState} from "react";
function Expenses(props) {
  const expenses = props.expenses;
  const [year, setYear] = useState("2020");
  const yearChangeHandler = (year) => {
    setYear(year);
  };

  return (
    <div>
      <h3>Selected year: {year}</h3>
      <Card className="expenses">
        <ExpenseFilter selected={year} onYearChange={yearChangeHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
