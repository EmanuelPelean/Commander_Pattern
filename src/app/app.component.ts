import { Component } from '@angular/core';
import { Command, ConcreteCommand1, ConcreteCommand2, Invoker, Receiver, UpdateConfiguration } from './command-pattern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public receiver: Receiver = new Receiver();
  public command1: Command = new ConcreteCommand1(this.receiver);
  public command2: Command = new ConcreteCommand2(this.receiver);
  public invoker: Invoker = new Invoker();

  onRun(): void {
    this.invoker.storeAndExecute(this.command1);
  }

  onWalk(): void {
    this.invoker.storeAndExecute(this.command2);
  }

  onGetCommands(): void {
    console.log(this.invoker.commands);
  }

  onUpdateConfig(config: string): void {
    this.invoker.storeAndExecute(new UpdateConfiguration(this.receiver, config));
  }
}


