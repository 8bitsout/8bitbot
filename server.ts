const express = require('express');
const {logger, ILogger} = require('./logger');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('8bitbot');
});

app.listen(port, () => {
	console.log(`8bitbot listening at http://localhost:${port}`);
});

class Server {
	port: string;
	logger: ILogger;
	constructor(port: string, logger: ILogger) {
		this.port = port;
		this.app = app;
	}
	
	listen() {
		this.app.listen(this.port, () => {
	    this.logger.info(`8bitbot listening at http://localhost:${port}`);
		});
	}
	
	addRoute(method, name, fn) {
		this.app[method](name, fn);
	}

	addGet(name, fn) {
		this.addRoute('get', name, fn);
	}
}

function NewServer(port: string, logger: ILogger) {
	return new Server(port, logger);
}

module.exports = {
	NewServer,
	Server,
}
