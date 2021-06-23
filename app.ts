const NewServer = require('../server');
const Logger = require('../logger');

const server = NewServer(process.env.PORT, Logger);

