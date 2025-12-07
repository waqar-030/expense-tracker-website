const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="history-section">
      <h3>History</h3>
      <div className="transactions-list">
        {transactions.length === 0 ? (
          <p className="no-transactions">No transactions yet</p>
        ) : (
          transactions.map(transaction => (
            <div key={transaction.id} className={`transaction ${transaction.amount > 0 ? 'income-transaction' : 'expense-transaction'}`}>
              <div className="transaction-info">
                <span className="description">{transaction.description}</span>
                <span className={`amount ${transaction.amount > 0 ? 'income' : 'expense'}`}>
                  {transaction.amount > 0 ? '+' : ''} ${transaction.amount.toFixed(2)}
                </span>
              </div>
              <button 
                className="delete-btn"
                onClick={() => onDelete(transaction.id)}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TransactionList
