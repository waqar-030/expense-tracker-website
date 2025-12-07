import { useTransactions } from './hooks/useTransactions'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'
import TransactionForm from './components/TransactionForm'
import './App.css'

function App() {
  const {
    transactions,
    description,
    setDescription,
    amount,
    setAmount,
    handleAddTransaction,
    handleDeleteTransaction,
    calculateTotals
  } = useTransactions()

  const { income, expense, balance } = calculateTotals()

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTransaction()
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>

      <Balance income={income} expense={expense} balance={balance} />
      
      <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
      
      <TransactionForm
        description={description}
        amount={amount}
        onDescriptionChange={setDescription}
        onAmountChange={setAmount}
        onSubmit={handleAddTransaction}
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}

export default App
