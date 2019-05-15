export class Command {
  public execute(): void {
    throw new Error('Abstarct method!');
  }
}

export class ConcreteCommand1 extends Command {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    super();
    this.receiver = receiver;
  }

  public execute (): void {
    console.log('execute in command1');
    this.receiver.Run();
  }
}

export class UpdateConfiguration extends Command {
  private config = '';
  private receiver: Receiver;

  constructor(receiver: Receiver, config: string) {
    super();
    this.receiver = receiver;
    this.config = config;
  }

  public execute (): void {
    console.log('execute config update');
    this.receiver.updateConfig(this.config);
  }
}

export class ConcreteCommand2 extends Command {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    super();
    this.receiver = receiver;
  }

  public execute (): void {
    console.log('execute in command2');
    this.receiver.Walk();
  }
}

export class Invoker {
  public commands: Command[];

  constructor() {
    this.commands = [];
  }

  public storeAndExecute(cmd: Command) {
    this.commands.push(cmd);
    cmd.execute();
  }
}

export class Receiver {
  public Run(): void {
    console.log('running...');
  }

  public Walk(): void {
    console.log('walking...');
  }

  public updateConfig(config: string) {
    console.log('Update with this value:', config);
  }
}
