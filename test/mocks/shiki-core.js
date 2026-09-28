/**
 * Jest-wide stub for `shiki/core` (mapped in jest.config.js).
 *
 * Shiki ships ESM-only `.mjs` builds that jsdom/jest cannot parse, so every
 * suite that transitively loads it resolves to this stub instead. Suites
 * needing controllable behaviour (SyntaxHighlighter.test.tsx) import the
 * exported jest.fn()s and configure them directly.
 */
const getSingletonHighlighterCore = jest.fn(() =>
  Promise.resolve({
    loadLanguage: jest.fn(),
    codeToHtml: jest.fn(() => ''),
  }),
);

module.exports = { getSingletonHighlighterCore };
