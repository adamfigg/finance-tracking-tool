import React from 'react';

const Expenses = ({ expenses, editExpense, deleteExpense }) => {

	const expenseList = expenses.length ? (
		expenses.map(expense => {
			return (
				<div className="collection-item" key={expense.id}>
					<span>Expense: {expense.expense}</span>
					<span className="cost">{expense.cost}</span>
					<br />
					<span>Type: {expense.type}</span>
					<button
						className="edit-button"
						onClick={() => { editExpense(expense.id) }}
					>
						edit details
						</button>
					<button
						className="delete-button"
						onClick={() => { deleteExpense(expense.id) }}
					>
						delete
						</button>
				</div>
			)
		})
	) : (
			<p className="center">Wow, you have no expenses! But just to be safe you, should call an accountant.</p>
		)

	return (
		<div className='expense collection'>
			{expenseList}
		</div>
	)
}

export default Expenses;