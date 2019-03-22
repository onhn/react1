import React from 'react';

/*
Example output:

*/
class FetchPost extends React.Component {

	constructor(props) {
		super(props);

		console.log('FetchPost');

		fetch('http://localhost:3001?msg=post', {
			method: 'POST',
			crossDomain: true,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstParam: 'yourValue',
				secondParam: 'other value',	
			})
		}).then(response => {
			console.log('Nodejs response: ', response);
			console.log(response.body);
			var body = response.body;
			var reader = body.getReader();
			reader.read()
			.then(txt => {
				console.log(txt);
				var string = new TextDecoder("utf-8").decode(txt.value);
				console.log(string);
			});
		}).catch(error => {
			console.error('Erro no fetch ...');
			console.error(error);	
		});
	}

	render() {
		return (
			<div>Fetching data ...</div>
		);
	}

}

export default FetchPost;
