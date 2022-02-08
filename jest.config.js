module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/build/'
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.json',
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/build/'],
};
