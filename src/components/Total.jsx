import { Fragment } from "react";
import { calculateTotal } from "../utils/util";

function Total(props) {
  const { allExpenses } = props;
  return (
    <Fragment>
      <h1 className="heading">Expenses Tracker</h1>
      <div className="flex justify-ct total">
        <div className="box">
          <h3 className="total-heading">income</h3>
          <p className="total-income total-amount">
            <i className="fas fa-rupee-sign fa-xs"></i>
            {!allExpenses ? 0 : calculateTotal(allExpenses, "Income")}
          </p>
        </div>
        <hr />
        <div className="box">
          <h3 className="total-heading">expense</h3>
          <p className="total-expense total-amount">
            <i className="fas fa-rupee-sign fa-xs"></i>
            {!allExpenses ? 0 : calculateTotal(allExpenses, "Expense")}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Total;
