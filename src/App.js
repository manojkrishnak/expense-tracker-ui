import { useState, useEffect } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import DisplayExpenses from "./components/DisplayExpenses";
import Total from "./components/Total";
import "./App.css";
import {
  getExpensesFromLocalStorage,
  setExpensesToLocalStorage,
} from "./utils/util";
import { localStorageKey } from "./utils/constant";

function App() {
  const [expense, setExpense] = useState({
    name: "",
    amount: 0,
    type: "",
    mode: "upi",
  });
  const [allExpenses, setAllExpenses] = useState([]);

  useEffect(() => {
    setAllExpenses(getExpensesFromLocalStorage(localStorageKey));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function addExpenseOnSubmit(e) {
    e.preventDefault();
    const { name, amount, type } = expense;
    const expenseDetails = {
      ...expense,
      purchaseDate: new Date(),
    };
    console.log(name, amount);
    if (!name || !amount || !type) {
      alert("Feilds cannot be empty");
      return;
    }
    if (!getExpensesFromLocalStorage(localStorageKey)) {
      setAllExpenses(() => [{ ...expenseDetails }]);
    } else {
      setAllExpenses((prevState) => [...prevState, { ...expenseDetails }]);
    }
    setExpensesToLocalStorage(localStorageKey, expenseDetails);
    setExpense({
      name: "",
      amount: "",
      type: "",
      mode: "upi",
    });
  }
  /* 
  1. implement to show only that months expenses
  2. add category ( Books, food, medical etc)
  2. download report excel/pdf
  3. delete option
  4. update option
  5. show few tranx. in home page and all in another page
  6. for all record page implement sort (asec, desc) on amount
  7. show pie chart and normal table on the category spent 
  8. show good evening as such welcome message
  9. implement to take name
  */

  return (
    <div className="container app">
      <Total allExpenses={allExpenses} />
      <DisplayExpenses allExpenses={allExpenses} />
      <AddExpenseForm
        expense={expense}
        handleChange={handleChange}
        addExpenseOnSubmit={addExpenseOnSubmit}
      />
    </div>
  );
}

export default App;
