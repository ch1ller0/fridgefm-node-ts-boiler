// @ts-check

import pluginImport from 'eslint-plugin-import';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

// eslint-disable-next-line import/no-default-export
export default tseslint.config([
  {
    files: ['**/*.{ts,tsx,cts,mts,js,cjs,mjs}'],
  },
  {
    ignores: ['**/node_modules/**', 'lib/**', 'coverage/**', 'eslint.config.mjs'],
  },
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: { ...globals.node },
      ecmaVersion: 'latest',
      parserOptions: {
        tsConfigRootDir: import.meta.dirname,
        project: './tsconfig.dev.json',
      },
    },
  },
  // import-plugin config
  {
    ...pluginImport.flatConfigs.recommended,
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
  },
  // prettier-plugin config
  {
    ...pluginPrettierRecommended,
    rules: {
      'prettier/prettier': [
        2,
        {
          arrowFunctionParenthesis: true,
          singleQuote: true,
          semi: true,
          bracketSpacing: true,
          printWidth: 100,
          trailingComma: 'all',
        },
        { usePrettierrc: false },
      ],
    },
  },
  // Shared rules
  {
    rules: {
      'no-console': 2,
      'prefer-destructuring': 1,
      'import/no-default-export': 2,
      'import/no-extraneous-dependencies': 2,
      'import/order': [
        2,
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],
      'import/prefer-default-export': 0,
    },
  },
  // Typescript rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          '': 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-default-export': 2,
      '@typescript-eslint/consistent-type-definitions': [2, 'type'],
      '@typescript-eslint/consistent-type-imports': [
        2,
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-explicit-any': 2,
    },
  },
]);
