import React, { Component } from 'react';
import Expenses from './Expenses';
import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import Modal from 'react-modal';

class App extends Component {

	state = {
		expenses: [
			{ id: 1, expense: 'cheese', cost: 150.00, type: 'food' },
			{ id: 2, expense: 'bird law fees', cost: 60.00, type: 'work' },
			{ id: 3, expense: 'pay rent', cost: 650.00, type: 'living expense' },
			{ id: 4, expense: 'kitten mittens', cost: 25.50, type: 'living expense' },
		],
		modalIsOpen: false
	}

	addExpense = (expense) => {
		expense.id = Math.random();
		let expenses = [...this.state.expenses, expense];
		this.setState({
			expenses
		})
	}

	editExpense = (id) => {
		this.setState({
			modalIsOpen: true
		})
	}


	// editExpense = (id) => {
	// 	const expenseToEdit = this.state.expenses.filter(expense => {
	// 		return expense.id === id
	// 	});
	// 	this.setState({
	// 		modalIsOpen: true
	// 	})
	// 	console.log(id, expenseToEdit, 'this is the id of the expense to get edited');
	// 	console.log(expenseToEdit, 'expenseToEdit');
	// 	console.log(this.state.modalIsActive);
	// }

	deleteExpense = (id) => {
		const expenses = this.state.expenses.filter(expense => {
			return expense.id !== id
		});
		this.setState({
			expenses
		})
	}

	render() {
		return (
			<div className="expense-app container">
				<h3 className="center blue-text">Where's My Money</h3>
				<Expenses
					expenses={this.state.expenses}
					deleteExpense={this.deleteExpense}
				/>
				<EditExpense editExpense={this.editExpense} />
				<AddExpense addExpense={this.addExpense} />
			</div>
		);
	}
}

export default App;
