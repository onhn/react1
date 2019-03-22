const http = require('http')
const port = 3001

/*
A better server example can be found at this link:
https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
*/
const requestHandler = (request, response) => {

	const { headers, method, url } = request;

	// Set CORS headers
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET', 'POST', 'CORS');
	response.setHeader('Access-Control-Allow-Headers', '*');
	if ( request.method === 'OPTIONS' ) {
		response.writeHead(200);
		response.end();
		return;
	}
	
	let body = []
	request.on('error', (err) => {
	    console.error(err);
	}).on('data', (chunk) => {
		console.log('chunk method: ' + request.method); // Only prints for POST
		return body.push(chunk);
	}).on('end', () => {
		console.log('end method: ' + request.method); // Both GET and POST
	    body = Buffer.concat(body).toString();

		var json = {};
		if (request.method === 'POST') {
			console.log('body 1', body); // body {"firstParam":"yourValue","secondParam":"other value"}
			json = JSON.parse(body);
			Object.keys(json).forEach(key => {
				console.log(key + " => " + json[key]);
			});
		}
	
		response.writeHead(200, {"Content-Type" : "text/plain"})
		response.write('Hello method ' + request.method)
		response.end()
		return body;
	});

	console.log('body 2', body);

}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
});
