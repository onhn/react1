import React from 'react';

/*
Example output:

Fetch1
Nodejs response:
Response {
	type: "cors", 
	url: "http://localhost:3001/?msg=super", 
	redirected: false, 
	status: 200, 
	ok: true, …
}
body: (...)
bodyUsed: trueheaders: Headers {}
ok: true
redirected: false
status: 200
statusText: "OK"
type: "cors"
url: "http://localhost:3001/?msg=super"
__proto__: Response
ReadableStream {}
{value: Uint8Array(21), done: false}
Hello Node.js Server!
*/
class Fetch1 extends React.Component {

	constructor(props) {
		super(props);

		console.log('Fetch1');

		fetch('http://localhost:3001?msg=super', {
			method: 'GET',
			crossDomain: true,
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

export default Fetch1;
