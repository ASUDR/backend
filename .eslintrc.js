module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript/base',
    "prettier",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "prettier/prettier": "error",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "ignoreRestSiblings": true,
      "argsIgnorePattern": "^_$",
    }],
  },
};
