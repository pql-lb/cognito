module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    clearMocks: true,
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        "<rootDir>/src/tests/setupTests.js",
    ],
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.js", "src/**/*.jsx"],
};
