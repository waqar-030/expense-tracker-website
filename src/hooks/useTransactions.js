import { useState } from 'react'

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleAddTransaction = () => {
    if (description.trim() === '' || amount === '') {
      alert('Please enter both description and amount')
      return
    }

    const newTransaction = {
      id: Date.now(),
      description: description,
      amount: parseFloat(amount)
    }

    setTransactions([...transactions, newTransaction])
    setDescription('')
    setAmount('')
  }

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const calculateTotals = () => {
    let income = 0
    let expense = 0

    transactions.forEach(transaction => {
      if (transaction.amount > 0) {
        income += transaction.amount
      } else {
        expense += Math.abs(transaction.amount)
      }
    })

    return { income, expense, balance: income - expense }
  }

  return {
    transactions,
    description,
    setDescription,
    amount,
    setAmount,
    handleAddTransaction,
    handleDeleteTransaction,
    calculateTotals
  }
}
