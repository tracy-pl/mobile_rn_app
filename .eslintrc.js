module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es2020: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-underscore-dangle': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    'global-require': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': ['error', { variables: false }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'react/function-component-definition': 0,
    'class-methods-use-this': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
