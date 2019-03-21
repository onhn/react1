import React from 'react';

class NameForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			flavor: 'coconut',
		};

		this.nameHandle = this.nameHandle.bind(this);
		this.flavorHandle = this.flavorHandle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	nameHandle(event) {
		this.setState({name: event.target.value.toUpperCase()});
	}

	flavorHandle(event) {
		this.setState({flavor: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		alert(`Name: ${this.state.name}
			   Flavor: ${this.state.flavor}`);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.name}
						onChange={this.nameHandle} />
				</label>
				Pick your flavor:
				<select value={this.state.flavor}
					onChange={this.flavorHandle}>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default NameForm;
