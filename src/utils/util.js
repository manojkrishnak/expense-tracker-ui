export function calculateTotal(expenses, type) {
  return expenses.reduce((acc, expense) => {
    if (expense.type === type) {
      return acc + Number(expense.amount);
    }
    return acc;
  }, 0);
}

export function formatDate(date) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date)
    .toLocaleDateString("en-US", options)
    .replaceAll(",", "");
}

export function setExpensesToLocalStorage(key, expense) {
  const allExpenses = getExpensesFromLocalStorage(key);
  console.log(">> ", allExpenses);
  if (!allExpenses) {
    return window.localStorage.setItem(key, JSON.stringify([expense]));
  } else {
    return window.localStorage.setItem(
      key,
      JSON.stringify([...allExpenses, expense])
    );
  }
}

export function getExpensesFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
