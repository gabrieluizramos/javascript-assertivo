export default {
  testEnvironment: 'node',
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  moduleNameMapper: {
    '^controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
  }
}
