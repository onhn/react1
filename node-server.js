const http = require('http')
const port = 3001

const requestHandler = (request, response) => {
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
	// console.log(request)
	// console.log(request.url)
	response.writeHead(200, {"Content-Type" : "text/plain"})
	response.write('Hello Node.js Server!')
	response.end()
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
});
