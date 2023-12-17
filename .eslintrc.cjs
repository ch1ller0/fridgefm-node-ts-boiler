module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  parserOptions: {
    project: './tsconfig.dev.json',
  },
  rules: {
    'class-methods-use-this': 0,
    'default-case': 0,
    'no-console': 2,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 1,
    '@typescript-eslint/no-explicit-any': 2,
    'import/extensions': 0,
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
