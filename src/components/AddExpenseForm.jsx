function AddExpenseForm(props) {
  console.log(props);
  return (
    <div>
      <h2 className="add-expense-heading">Add new transaction</h2>
      <form className="flex col" onSubmit={props.addExpenseOnSubmit}>
        <fieldset>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type={"text"}
            className="name-input"
            id="name"
            name="name"
            value={props.expense.name}
            onChange={props.handleChange}
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <fieldset>
            <input
              type="button"
              className={
                props.expense.type === "Expense"
                  ? "type-btn selected-type-btn red"
                  : "type-btn"
              }
              value="Expense"
              name="type"
              onClick={props.handleChange}
            />
            <input
              type="button"
              className={
                props.expense.type === "Income"
                  ? "type-btn selected-type-btn green"
                  : "type-btn"
              }
              value="Income"
              name="type"
              onClick={props.handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="mode" className="select-label">
              Select Payment mode:
            </label>
            <select
              id="mode"
              onChange={props.handleChange}
              name="mode"
              value={props.expense.mode}
            >
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="upi">UPI</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="date" className="date-label">
              Date of Purchase:
            </label>
            <input
              type="date"
              className="date-input"
              id="date"
              name="purchaseDate"
              value={props.expense.purchaseDate}
              onChange={props.handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="category" className="select-label">
              Select a Category:
            </label>
            <select
              value={props.expense.category}
              onChange={props.handleChange}
              id="category"
              name="category"
            >
              <option value="others">Others</option>
              <option value="medical">Medical</option>
              <option value="food-dining">Food and Dining</option>
              <option value="shopping">Shopping</option>
              <option value="bills-utilities">Bills and Utilities</option>
              <option value="education">Education</option>
              <option value="personal-care">Personal Care</option>
            </select>
          </fieldset>
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            className="amount-input"
            id="amount"
            name="amount"
            value={props.expense.amount}
            onChange={props.handleChange}
            autoComplete="off"
          />
        </fieldset>
        <button type="submit" className="submit-btn">
          {props.updateOpt.update ? "Update" : "Add"} Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpenseForm;