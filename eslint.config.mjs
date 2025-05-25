import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],

    rules: {
      /**
       * Allow empty arrow functions `() => {}`, while keeping other empty functions restricted
       * @see https://eslint.org/docs/latest/rules/no-empty-function#allow-arrowfunctions
       */
      '@typescript-eslint/no-empty-function': [
        'error',
        { allow: ['arrowFunctions'] }
      ],
      /* Required by vite */
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      /**
       * Allow unused variables with names stating with '_'
       * @see https://eslint.org/docs/latest/rules/no-unused-vars
       * @see https://typescript-eslint.io/rules/no-unused-vars/
       */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          args: 'after-used'
        }
      ]
    }
  })
]

export default eslintConfig
