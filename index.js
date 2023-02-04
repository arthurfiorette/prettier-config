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
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-organize-imports')
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
