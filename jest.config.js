const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/e2e/"],
  moduleNameMapper: {
    // Handle module aliases
    "^@/(.*)$": "<rootDir>/$1",
    // Shiki ships ESM-only .mjs builds that jsdom cannot parse; every shiki
    // module the app loads resolves to a lightweight CJS stub instead. Under
    // parallel load, per-suite `jest.mock` factories can race with module
    // resolution and let the real .mjs through — mapper-based stubs cannot.
    "^shiki/core$": "<rootDir>/test/mocks/shiki-core.js",
    "^shiki/engine/javascript$": "<rootDir>/test/mocks/shiki-engine-javascript.js",
    "^@shikijs/langs/js$": "<rootDir>/test/mocks/shiki-lang-js.js",
    "^@shikijs/langs/python$": "<rootDir>/test/mocks/shiki-lang-python.js",
    "^@shikijs/langs/php$": "<rootDir>/test/mocks/shiki-lang-php.js",
    "^@shikijs/langs/go$": "<rootDir>/test/mocks/shiki-lang-go.js",
    "^@shikijs/themes/github-light$": "<rootDir>/test/mocks/shiki-theme-github-light.js",
    "^@shikijs/themes/github-dark$": "<rootDir>/test/mocks/shiki-theme-github-dark.js",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
