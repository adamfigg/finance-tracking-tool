import React, { Component } from 'react';

import Modal from 'react-modal';

class EditExpense extends Component {
	state = {
		expense: '',
		cost: '',
		type: '',
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
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Example Modal"
				></Modal>
			</div>
		)
	}
}

export default EditExpense;