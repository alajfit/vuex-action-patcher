module.exports = {
  rootDir: '../../',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleDirectories: ['node_modules', 'src'],
  verbose: true,
  collectCoverage: true,
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: 'test/unit/coverage/',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!**/node_modules/**',
    '!**/test/**'
  ],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/(**).(spec|test).js?(x)']
}