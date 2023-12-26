module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    project: './tsconfig.base.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {}
}
