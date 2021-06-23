const winston = require('winston');
const config = require('../config');

interface ILogger {
	error: (msg: string) => void;
	warn: (msg: string) => void;
	info: (msg: string) => void;
	http: (msg: string) => void;
	verbose: (msg: string) => void;
	debug: (msg: string) => void;
}

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
}

const level = () => config.env === 'development' ? 'debug' : 'warn';

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

winston.addColors(colors);

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
  // Add the message timestamp with the preferred format
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  // Tell Winston that the logs must be colored
  winston.format.colorize({ all: true }),
  // Define the format of the message showing the timestamp, the level and the message
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
)

// Define which transports the logger must use to print out messages. 
// In this example, we are using three different transports 
const transports = [
  // Allow the use the console to print the messages
  new winston.transports.Console(),
  // Allow to print all the error level messages inside the error.log file
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  // Allow to print all the error message inside the all.log file
  // (also the error log that are also printed inside the error.log(
  new winston.transports.File({ filename: 'logs/all.log' }),
];

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

type Logger = Logger;

module.exports = {
	ILogger,
	Logger,
	logger,
};
