import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config([
  globalIgnores(['dist', 'vite.config.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'import': importPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['@app', './src/app'],
            ['@shared', './src/shared'],
            ['@features', './src/features'],
            ['@widgets', './src/widgets'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'import/order': ['error', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      }],
      'import/no-unresolved': 'error',
    },
  },
])