import { Module } from '@nestjs/common';
import { TypeCleanModule } from '../../src';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [TypeCleanModule, HelloModule]
})
export class AppModule {}
