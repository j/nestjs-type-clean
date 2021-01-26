import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { HelloHandler } from './handlers/hello.handler';

@Module({
  controllers: [HelloController],
  providers: [HelloService, HelloHandler]
})
export class HelloModule {}
