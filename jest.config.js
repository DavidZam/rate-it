module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/cypress'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@guards/(.*)$': '<rootDir>/src/app/core/guards/$1',
    '^@interceptors/(.*)$': '<rootDir>/src/app/core/interceptors/$1',
    '^@models/(.*)$': '<rootDir>/src/app/core/models/$1',
    '^@services/(.*)$': '<rootDir>/src/app/core/services/$1',
    '^@pages/(.*)$': '<rootDir>/src/app/pages/$1',
    '^@directives/(.*)$': '<rootDir>/src/app/shared/directives/$1',
    '^@pipes/(.*)$': '<rootDir>/src/app/shared/pipes/$1',
  },
  restoreMocks: true,
};
