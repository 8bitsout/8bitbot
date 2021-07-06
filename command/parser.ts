function parse(msg: string) {
	if (!msg.startsWith('!')) return;
	const messageParts: Array<String> = string.split(' ');
	let command: string = messageParts[0];
	command = messageParts.substring(1, command.length);
	return command;
}
