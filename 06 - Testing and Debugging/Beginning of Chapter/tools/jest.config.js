/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots:["<rootDir>/src/"],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest configuration goes here
      },
    ],
  }
};