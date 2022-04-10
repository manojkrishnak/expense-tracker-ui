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
    amount: "", //made change to string; previously 0
    type: "",
    mode: "upi",
    purchaseDate: "",
    category: "others",
  });
  const [allExpenses, setAllExpenses] = useState([]);
  const [updateOpt, setUpdateOpt] = useState({
    update: false,
    id: "",
  });

  useEffect(() => {
    setAllExpenses(getExpensesFromLocalStorage(localStorageKey));
  }, [expense]);

  function handleChange(e) {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function addExpenseOnSubmit(e) {
    e.preventDefault();
    const { name, amount, type, mode, category, purchaseDate } = expense;
    const allExpenses = getExpensesFromLocalStorage(localStorageKey);
    if (updateOpt.update) {
      allExpenses[updateOpt.id].name = name;
      allExpenses[updateOpt.id].amount = amount;
      allExpenses[updateOpt.id].type = type;
      allExpenses[updateOpt.id].mode = mode;
      allExpenses[updateOpt.id].category = category;
      allExpenses[updateOpt.id].purchaseDate = purchaseDate;
      console.log(allExpenses);
      setExpensesToLocalStorage(localStorageKey, "update", allExpenses);
      // setAllExpenses(allExpenses);
      setUpdateOpt({
        update: false,
        id: "",
      });
      setExpense({
        name: "",
        amount: "",
        type: "",
        mode: "upi",
        purchaseDate: "",
        category: "others",
      });
      return;
    }
    const expenseDetails = {
      ...expense,
    };
    if (!name || !amount || !type) {
      alert("Fields cannot be empty");
      return;
    }
    console.log(name, amount);
    if (!allExpenses) {
      setAllExpenses(() => [{ ...expenseDetails }]);
    } else {
      setAllExpenses((prevState) => [...prevState, { ...expenseDetails }]);
    }
    setExpensesToLocalStorage(localStorageKey, "", expenseDetails);
    setExpense({
      name: "",
      amount: "",
      type: "",
      mode: "upi",
      purchaseDate: "",
      category: "others",
    });
  }

  function deleteTransc(id) {
    const allExpenses = getExpensesFromLocalStorage(localStorageKey);
    const updatedExpenses = allExpenses.filter((expense, i) => i !== id);
    setExpensesToLocalStorage(localStorageKey, "delete", updatedExpenses);
    setAllExpenses(updatedExpenses)
  }

  function editTransc(id) {
    console.log("value", id);
    const allExpenses = getExpensesFromLocalStorage(localStorageKey);
    setExpense(allExpenses[id]);
    setUpdateOpt((prevState) => ({
      ...prevState,
      ...{ update: true, id: id },
    }));
  }
  /* 
  1. implement to show only that months expenses
  2. add category ( Books, food, medical etc)  -- done
  2. download report excel/pdf
  3. delete option -- done
  4. update option -- done
  5. show few tranx. in home page and all in another page (convert to SPA)
  6. for all record page implement view for other months and sort (asec, desc) on amount
  7. show pie chart and normal table on the category spent 
  8. show good evening as such welcome message
  9. implement to take name
  */

  return (
    <div className="container app">
      <Total allExpenses={allExpenses} />
      <DisplayExpenses
        allExpenses={allExpenses}
        editTransc={editTransc}
        deleteTransc={deleteTransc}
      />
      <AddExpenseForm
        expense={expense}
        handleChange={handleChange}
        addExpenseOnSubmit={addExpenseOnSubmit}
        updateOpt={updateOpt}
      />
    </div>
  );
}

export default App;
