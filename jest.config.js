module.exports = {
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)?$',
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/*.{js,ts}', '!**/node_modules/**'],
  cacheDirectory: 'cache',
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/']
}
