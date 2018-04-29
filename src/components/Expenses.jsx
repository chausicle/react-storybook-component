import React from 'react'

const Expense = (props) => (
  <div class="expense">
    { props.key.toString() }: { props.expense.date } - ${ props.expense.amount }
  </div>
)

const Expenses = (expenses) => (
  <div class="expenses">
    <p>The first expense's amount is { expenses[0].amount }</p>
    { expenses.map( (expense, i) => <Expense key={i} expense={expense} />) }
  </div>
)

export default Expenses
