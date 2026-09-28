/**
 * Jest stub for `@shikijs/langs/js` (mapped in jest.config.js).
 * Shiki ships ESM-only .mjs builds that jsdom cannot parse.
 * The SyntaxHighlighter suite imports this module to keep grammar
 * identity assertions intact.
 */
module.exports = {
  __esModule: true,
  default: [{ name: 'javascript', aliases: ['js'] }],
};
