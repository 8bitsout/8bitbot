import { Logger, Winston } from './logger';

const logger = new Logger(Winston);
logger.info('Logger created');
