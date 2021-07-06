const config = require('./config');
const app = express();
const port = process.env.PORT;
import { Logger } from '../logger';

class Server {
	hostname: string;
	port: number;
	logger: Logger;
	server: any;

	constructor(server: any, hostname: string, port: number, logger: Logger) {
		this.hostname = hostname;
		this.port = port;
		this.server = app;
		this.logger = logger;
	}
	
	listen() {
		this.server.listen(this.port, () => {
	    this.logger.info(`8bitbot listening at ${this.hostname}:${this.port}`);
		});
	}
	
	addRoute(method, name, fn) {
		this.app[method](name, fn);
	}

	addGet(name, fn) {
		this.addRoute('get', name, fn);
	}
}

function NewServer(port: string, logger: Logger) {
	return new Server(port, logger);
}

const server = NewServer(config.port, Logger);

module.exports = {
	NewServer,
	Server: server,
}
