import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: 'tsconfig.dev.json',
        diagnostics: false,
      },
    ],
  },
  testRegex: '(test|spec)\\.[jt]sx?$',
  collectCoverageFrom: ['src/**/*.ts'],
  verbose: true,
};

export default config;
