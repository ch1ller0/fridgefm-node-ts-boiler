module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', 'prettier'],
  env: { node: true },
  parserOptions: {
    project: './tsconfig.dev.json',
  },
  rules: {
    'no-console': 2,
    'prefer-destructuring': 1,
    '@typescript-eslint/consistent-type-imports': [
      2,
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/no-explicit-any': 2,
    'import/no-default-export': 2,
    'import/no-extraneous-dependencies': 2,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'import/prefer-default-export': 0,
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
    ],
  },
};
