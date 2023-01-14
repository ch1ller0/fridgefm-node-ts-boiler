# Node + Typescript Boilerplate
A simple template for a library with built-in ts, jest, eslint, prettier support

# Built-in features
All these features are preconfigured and you are ready to go

- [Typescript@4.9](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9/) for static typing
- [Ts-node-dev@2.0](https://github.com/wclr/ts-node-dev#readme) for faster local dev
- [Jest@29.3](https://jestjs.io/) for unit testing
- [Eslint@8.31](https://eslint.org/) for code linting with recommended rules
- [Prettier@2.8](https://prettier.io/) for code formatting with recommended rules
- Github templates for issue/pr/contributing
- Useful [package.json scripts]
- Simple example of usage

# Getting started

## Installation
On github you may just click [`Use this template`](https://github.com/ch1ller0/fridgefm-node-ts-boiler/generate) button or do the following
1. clone this repo
2. `cd` into it
3. `rm -rf .git`
4. `git init`
5. enjoy

Now you can change your source files and run the following commands. Feel free to tweak them as you like.

## Package Scripts
- `start` - start local development from _src/index.ts_ file
- `build` - transpile source files to _es2017_
- `build:watch` - transpile in watch mode
- `test` - run all checks, useful for CI
- `test:lint` - run linter against source files in _src/_
- `test:types` - run typechecking for source files
- `test:unit` - run unit tests
- `test:unit:watch` - run unit tests in watch mode