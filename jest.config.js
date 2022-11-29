const {defaults} = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/?(!react-native)'],
  moduleFileExtensions: ['tsx', ...defaults.moduleFileExtensions],
};
