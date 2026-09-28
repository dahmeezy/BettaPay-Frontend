/**
 * Jest stub for `@shikijs/langs/php` (mapped in jest.config.js).
 * Shiki ships ESM-only .mjs builds that jsdom cannot parse.
 * The real php grammar embeds css/html/js/json grammars.
 */
module.exports = {
  __esModule: true,
  default: [{ name: 'css' }, { name: 'php' }],
};
