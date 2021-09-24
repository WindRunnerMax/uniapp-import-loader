module.exports = {
    moduleFileExtensions: ["js", "ts"],
    moduleDirectories: ["node_modules", "src"],
    transform: {
        "\\.ts$": "ts-jest",
        "\\.js$": "babel-jest",
    },
    collectCoverage: false,
    testMatch: ["**/test/**/*.test.js"],
};
