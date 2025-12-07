const Balance = ({ income, expense, balance }) => {
  return (
    <div className="summary">
      <div className="summary-item">
        <h3>YOUR BALANCE</h3>
        <p className="balance-amount">${balance.toFixed(2)}</p>
      </div>

      <div className="summary-row">
        <div className="summary-item income">
          <h4>INCOME</h4>
          <p className="amount">${income.toFixed(2)}</p>
        </div>
        <div className="summary-item expense">
          <h4>EXPENSE</h4>
          <p className="amount">${expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
