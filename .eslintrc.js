module.exports = {
  extends: 'next',
  settings: {
    next: {
      rootDir: 'apps/next/',
    },
  },
  rules: {
    'no-console': 'warn',
    'import/no-duplicates': 'error',
    'react/self-closing-comp': 'error',
    'react/display-name': 'off',
    'import/no-anonymous-default-export': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          [
            '^react(/.*)?$',
            '^react-native(/.*)?$',
            '@testing-library/react-native',
          ],
          ['^components(/.*)?$'],
          /** Start general imports https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/examples/.eslintrc.js */
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          /** End of general imports */
          ['^types', '^\\u0000$'],
          ['^utils(/.*)?$', '^consts(/.*)?$'],
          ['../style', '^styles', '^./styles'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
  },
  plugins: [
    'simple-import-sort',
    'unused-imports',
    'import',
    'prefer-arrow-functions',
  ],
  root: true,
}
