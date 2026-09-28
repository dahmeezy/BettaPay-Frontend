/**
 * Jest-wide stub for `shiki/engine/javascript` (mapped in jest.config.js).
 * Shiki ships ESM-only `.mjs` builds that jsdom/jest cannot parse.
 */
const createJavaScriptRegexEngine = jest.fn(() => ({}));

module.exports = { createJavaScriptRegexEngine };
