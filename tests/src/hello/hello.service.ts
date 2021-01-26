import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  async hello(who: string): Promise<string> {
    return `Hello, ${who}!`;
  }
}
