module.exports = {
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['js', 'json'],
  roots: ['test'],
  bail: 1,
  verbose: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
  coverageDirectory: './coverage',
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/$1",
    "@schema/(.*)": "<rootDir>/src/infrastructure/server/schema/$1",
    "@models/(.*)": "<rootDir>/src/infrastructure/server/models/$1",
    "@controllers/(.*)": "<rootDir>/src/infrastructure/server/controllers/$1",
  },
}
