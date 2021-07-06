const tmi = require('tmi.js');

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true,
	},
	channels: ['8bitsout'],
});

client.connect();

client.on('message', (channel: any, tags: any, message: any, self: any) => {
	// TODO: Replace console.log with Winston
	console.log(`${tags['display-name']}: ${message}`);
	const command = messanger.parse(message);
	messanger.handle(command);
});
