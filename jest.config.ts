/* eslint-disable import/no-default-export */
import type { Config } from 'jest';

export default (): Config => {
  return {
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
};
