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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          { '': 'never', ts: 'never', tsx: 'never' },
        ],
        '@typescript-eslint/consistent-type-definitions': [2, 'type'],
        '@typescript-eslint/consistent-type-imports': [
          2,
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/no-explicit-any': 2,
      },
    },
  ],
  settings: {
    // https://github.com/import-js/eslint-plugin-import/issues/1573#issuecomment-565973643
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
  },
};
