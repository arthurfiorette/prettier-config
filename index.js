/** @satisfies {import('prettier').Options} */
const defaultConfig = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  insertPragma: false,
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 90,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  tsdoc: true,
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-packagejson',
  ]
};

/**
 * Returns the prettier config with the given overridden options.
 *
 * @param {Partial<import('prettier').Options>} override
 * @returns {import('prettier').Options}
 *
 * @see {defaultConfig}
 */
module.exports = function config(override = {}) {
  return { ...defaultConfig, ...override };
};

module.exports.defaultConfig = defaultConfig;
