module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/prod_node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js'
  ],
  coverageDirectory: 'test/coverage',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
    '^@config(.*)$': '<rootDir>/src/configs$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
    '^@services(.*)$': '<rootDir>/src/services$1'
  },
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
}
