import { formatDate } from "../utils/util";

function DisplayExpenses(props) {
  return (
    <div className="history-container">
      <h2 className="history-heading">History</h2>
      <ul className="history">
        {props.allExpenses ? (
          props.allExpenses.map((expense) => (
            <li
              onClick={props.editTransc}
              className={
                expense.type === "Income"
                  ? " expense income-color"
                  : " expense expense-color"
              }
              key={`${expense.name}${expense.amount}`}
            >
              <div className="row-1-2 flex justify-bt">
                <p>{expense.name}</p>
                <span>
                  {/* {expense.type === "Income" ? "+" : "-"} */}
                  <i className="fas fa-rupee-sign fa-xs"></i>&nbsp;
                   {expense.amount}
                </span>
              </div>
              <div className="row-2-2 flex justify-bt">
                <p>
                  <time className="date" time={expense.purchaseDate}>
                    {formatDate(expense.purchaseDate)}
                  </time>
                </p>
                <p>
                  {expense.mode === "cash"
                    ? "💵"
                    : expense.mode === "card"
                    ? "💳"
                    : "📱"}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="no-transc-msg">
            You haven't spent anything this month. Good :)
          </li>
        )}
      </ul>
    </div>
  );
}

export default DisplayExpenses;
