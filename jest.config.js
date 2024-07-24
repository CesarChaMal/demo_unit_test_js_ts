module.exports = {
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',  // For transforming ES6 modules
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: [
    '**/test/**/*.(test|spec).(ts|js)'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(chai)/)', // Allow Jest to transform the Chai module
  ],
  testEnvironment: 'node',
};
