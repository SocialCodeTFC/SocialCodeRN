module.exports = {
  parser: '@typescript-eslint/parser',

  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],

  rules: {
    'prettier/prettier': ['error', require('./prettier.config.js')],
    quotes: ['warn', 'single', { avoidEscape: true }],
  },
};
