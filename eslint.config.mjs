import { defineConfig } from 'eslint/config';
import jsdoc from 'eslint-plugin-jsdoc';

export default defineConfig([
  {
    files: ['src/FileCabinet/SuiteScripts/**/*.js'],
    plugins: {
      jsdoc,
    },
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    settings: {
      browser: true,
      amd: true,
    },
    rules: {
      'jsdoc/require-jsdoc': 'error',
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }],
      'no-trailing-spaces': 'off',
      'no-duplicate-imports': 'error',
      'no-label-var': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-vars': 'error',
      'vars-on-top': 'error',
    },
  },
]);