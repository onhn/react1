import React from 'react';

import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
	if (props.celsius >= 100)
		return <p>The water would boil.</p>;
	return <p>The water would NOT boil.</p>;
}

function toCelsius(f) {
	return (f-32)*5/9;
}

function toFahrenheit(c) {
	return c * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;

	return rounded.toString();
}

class Calculator extends React.Component {

	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = {
			temperature: '',
			scale: 'c',
		};
	}

	handleCelsiusChange(temperature) {
		this.setState({
			temperature, scale: 'c',
		});
	}

	handleFahrenheitChange(temperature) {
		this.setState({
			temperature, scale: 'f',
		});
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange} />
				
				<BoilingVerdict
					celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

export default Calculator;