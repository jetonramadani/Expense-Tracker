import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../FilterExpense/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import {useState} from "react";
function Expenses(props) {
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onYearChange={yearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
