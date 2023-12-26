/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@test-lib$": "<rootDir>/test-lib",
    "^@domain$": "<rootDir>/src"
  },
}
