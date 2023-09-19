const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname),
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/app/contracts/**',
    '!<rootDir>/src/domain/**',
    '!<rootDir>/src/presentation/protocols/**',
    '!<rootDir>/src/shared/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  clearMocks: true,
  preset: 'ts-jest',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  }
}
