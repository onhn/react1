import React from 'react';

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(s, e) {
		console.log(s);
		console.log(e);
		console.log(e.timeStamp);
		console.log(e.clientX);
		console.log(e.clientY);
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick.bind(this, 'abc')}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}
}

export default Toggle;
