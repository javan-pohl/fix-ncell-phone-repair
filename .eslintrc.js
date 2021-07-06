module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
		'jest',
  ],
  rules: {
    semi: ['error', 'never'],
    '@typescript-eslint/semi': 'off',
    'no-unexpected-multiline': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-props-no-spreading': 'off',
		'max-len': 'off',
  },
}
