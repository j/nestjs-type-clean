import { Global, Module } from '@nestjs/common';
import { CommandRunner } from 'type-clean';
import { ModuleRef } from '@nestjs/core';


const commandRunner = {
  provide: CommandRunner,
  useFactory: async (moduleRef: ModuleRef) => {
    return new CommandRunner({
      container: {
        get: async (Cls: any): Promise<any> => {
          return moduleRef.get(Cls, { strict: false });
        }
      }
    });
  },
  inject: [ModuleRef]
};

@Global()
@Module({
  providers: [commandRunner],
  exports: [commandRunner]
})
export class TypeCleanModule {}
