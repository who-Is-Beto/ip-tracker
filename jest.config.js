module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/dist"],
  collectCoverage: true,
  verbose: true,
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/mocks/styleMock.js",
  },
};
