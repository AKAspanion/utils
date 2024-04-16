module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist",
  ],
  preset: "ts-jest",
  coverageDirectory: "report",
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        urlForTestFiles: "https://github.com/AKAspanion/utils/blob/main",
        pageTitle: "Utils Unit Tests",
        publicPath: "./report",
        filename: "index.html",
        openReport: false,
        darkTheme: true,
        hideIcon: true,
        expand: false,
      },
    ],
  ],
};
