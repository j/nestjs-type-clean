import { CommandHandler } from 'type-clean';
import { Injectable } from '@nestjs/common';
import { HelloService } from '../hello.service';

export interface HelloCommand {
  who: string;
}

@Injectable()
export class HelloHandler implements CommandHandler {
  constructor(private service: HelloService) {}

  async handle(command: HelloCommand): Promise<string> {
    return this.service.hello(command.who);
  }
}