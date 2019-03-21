import React from 'react';

// const age = this.props.user.age;

class Welcome extends React.Component {

	constructor(props) {
		super(props);
		this.age = props.user.age;
	}

	render() {
		return ( 
			<div>
				<h1>Welcome {this.props.user.name}</h1>
				He is {this.age} years old.
			</div>
		);
	}
}

export default Welcome;
