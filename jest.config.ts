import nextJest from 'next/jest.js';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@/(.*)$': 'src/$1',
    '^@/root/(.*)$': '/$1',
    '^@/components/(.*)$': 'src/components/$1',
    '^@/constants/(.*)$': 'src/constants/$1',
    '^@/hooks/(.*)$': 'src/hooks/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
};

export default createJestConfig(config);
