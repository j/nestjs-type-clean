import { Controller, Get, Param } from '@nestjs/common';
import { CommandRunner } from 'type-clean';
import { HelloHandler, HelloCommand } from './handlers/hello.handler';

@Controller('/hello')
export class HelloController {
  constructor(private readonly runner: CommandRunner) {}

  @Get('/:who')
  async hello(@Param() params: HelloCommand): Promise<string> {
    return this.runner.run(HelloHandler, params);
  }
}
