class Command {
	command: string;
	constructor(command: string) {
		this.command = command;
		this.validate(command);
	}

	validate(command: string) {
		// TODO: implement;
	}
}
