/**
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/prettier/index.d.ts
 *
 * @typedef {{
 *   semi: boolean;
 *   singleQuote: boolean;
 *   jsxSingleQuote: boolean;
 *   trailingComma: 'none' | 'es5' | 'all';
 *   bracketSpacing: boolean;
 *   jsxBracketSameLine: boolean;
 *   rangeStart: number;
 *   rangeEnd: number;
 *   parser: LiteralUnion<BuiltInParserName> | CustomParser;
 *   filepath: string;
 *   requirePragma: boolean;
 *   insertPragma: boolean;
 *   proseWrap: 'always' | 'never' | 'preserve';
 *   arrowParens: 'avoid' | 'always';
 *   plugins: (string | Plugin)[];
 *   htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore';
 *   endOfLine: 'auto' | 'lf' | 'crlf' | 'cr';
 *   quoteProps: 'as-needed' | 'consistent' | 'preserve';
 *   vueIndentScriptAndStyle: boolean;
 *   embeddedLanguageFormatting: 'auto' | 'off';
 * }} PrettierOptions
 */

/** @type {PrettierOptions} */
const defaultConfig = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
};

module.exports = defaultConfig;

/**
 * @param {Partial<PrettierOptions>} override
 * @returns {PrettierOptions}
 */
module.exports.config = (override = {}) => {
  return { ...defaultConfig, override };
};
