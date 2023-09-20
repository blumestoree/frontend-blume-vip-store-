module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        useTabs: false,
        tabWidth: 2,
        jsxSingleQuote: true,
        semi: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
