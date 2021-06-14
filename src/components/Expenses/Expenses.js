import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../FilterExpense/ExpensesFilter";
import {useState} from "react";
function Expenses(props) {
  const [year, setYear] = useState("2020");
  const yearChangeHandler = (year) => {
    setYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onYearChange={yearChangeHandler} />
        {props.expenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
