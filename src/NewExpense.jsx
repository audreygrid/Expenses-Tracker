// NewExpense.jsx
import React from "react";

function NewExpense({ expense }) {
  return (
    <tr>
      <td>{expense.name}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>{new Date(expense.date).toLocaleDateString()}</td>
    </tr>
  );
}

export default NewExpense;
