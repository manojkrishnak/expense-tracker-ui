import { formatDate } from "../utils/util";
import Icon from "./Icon";

function DisplayExpenses(props) {
  return (
    <div className="history-container">
      <h2 className="history-heading">History</h2>
      <ul className="history">
        {(props.allExpenses && props.allExpenses.length > 0) ? (
          props.allExpenses.map((expense, i) => (
            <li
              className={
                expense.type === "Income"
                  ? "expense income-color"
                  : "expense expense-color"
              }
              key={`${expense.name}${expense.amount}`}
            >
              <div className="flex justify-bt">
                <div
                  className="flex flex-90"
                  onClick={() => props.editTransc(i)}
                >
                  <div className="flex justify-ct align-ct flex-10 icon">
                    {<Icon category={expense.category} />}
                  </div>
                  <div className="flex-85">
                    <div className="row-1-2 flex justify-bt">
                      <p>{expense.name}</p>
                      <span>
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
                  </div>
                </div>
                <div
                  className="flex flex-10 justify-ct align-ct delete-btn"
                  onClick={() => props.deleteTransc(i)}
                >
                  <i className="fa-xs fas fa-trash-alt"></i>
                </div>
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
