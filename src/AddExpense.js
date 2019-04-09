import React, { Component } from 'react';

class AddExpense extends Component {
	state = {
		expense: '',
		cost: '',
		type: ''
	}


	handleChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addExpense(this.state);
		this.setState({
			expense: '',
			cost: '',
			type: ''
		})
	}

	render() {
		return (
			<div>
				<form>
					<label>Expense Name:
						<input
							name="expense"
							type="text"
							value={this.state.expense}
							onChange={this.handleChange}
						/>
					</label>
					<label>Amount Spent:
						<input
							name="cost"
							type="text"
							value={this.state.cost}
							onChange={this.handleChange}
						/>
					</label>
					<label>Type of expense:
						<input
							name="type"
							type="text"
							value={this.state.type}
							onChange={this.handleChange}
						/>
					</label>
					<button
						onClick={this.handleSubmit}
					>
						Add Expense
					</button>
				</form>
			</div>
		)
	}
}

export default AddExpense;