const TransactionForm = ({ description, amount, onDescriptionChange, onAmountChange, onSubmit, onKeyPress }) => {
  return (
    <div className="add-transaction-section">
      <h3>Add new transaction</h3>
      <div className="input-group">
        <input
          type="text"
          placeholder="Text"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <input
          type="number"
          placeholder="Amount(negative - expense, positive - income)"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <button onClick={onSubmit}>Add transaction</button>
      </div>
    </div>
  )
}

export default TransactionForm
