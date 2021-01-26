<h1 align="center" style="border-bottom: none;">nestjs-type-clean</h1>
<p align="center">
    A <a href="https://github.com/j/type-clean">type-clean</a> module for <a href="https://github.com/nestjs/nest">Nest.js</a>.
</p>

<p align="center">
    <a href="https://www.npmjs.com/~jrdn" target="_blank"><img src="https://img.shields.io/npm/v/nestjs-type-clean.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~jrdn" target="_blank"><img src="https://img.shields.io/npm/l/nestjs-type-clean.svg" alt="Package License" /></a>
    <a href="https://www.npmjs.com/~jrdn" target="_blank"><img src="https://img.shields.io/npm/dm/nestjs-type-clean.svg" alt="NPM Downloads" /></a>
</p>

## Installation

```bash
$ yarn add nestjs-type-clean
```

## Basic usage

**app.module.ts**

```typescript
import { Module } from "@nestjs/common";
import { TypeCleanModule } from 'nestjs-type-clean';
import { DogsModule } from "./dog.module.ts";

@Module({
  imports: [
    TypeCleanModule,
    DogsModule
  ]
})
export class AppModule {}
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```

## Stay in touch

- Author - [Jordan Stout](https://github.com/j)

## License

`nestjs-type-clean` is [MIT licensed](LICENSE).