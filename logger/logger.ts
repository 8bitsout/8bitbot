
export interface ILogger {
	error: (msg: string) => void;
	warn: (msg: string) => void;
	info: (msg: string) => void;
	http: (msg: string) => void;
	verbose: (msg: string) => void;
	debug: (msg: string) => void;
}

export class Logger implements ILogger {
  logger: any;
  constructor(logger: any) {
    this.logger = logger;
  }

  error(msg) {
    this.logger.error(msg);
  }

  warn(msg) {
    this.logger.warn(msg);
  }

  info(msg) {
    this.logger.info(msg);
  }

  http(msg) {
    this.logger.http(msg);
  }

  verbose(msg) {
    this.logger.verbose(msg);
  }

  debug(msg) {
    this.logger.debug(msg);
  }
}


