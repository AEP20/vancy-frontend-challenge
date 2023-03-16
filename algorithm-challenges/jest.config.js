module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["./index.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
