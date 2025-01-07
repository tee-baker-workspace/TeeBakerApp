module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 150,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^[^@./]', // Package imports (e.g., react, lodash)
    '^@/assets(.*)$', // Assets folder imports
    '^@/components(.*)$', // Components folder imports
    '^@/icons(.*)$', // Icons folder imports
    '^@/navigation(.*)$', // Navigation folder imports
    '^@/screens(.*)$', // Screens folder imports
    '^@/services(.*)$', // Services folder imports
    '^@/styles(.*)$', // Styles folder imports
    '^@/types(.*)$', // Types folder imports
    '^@/utils(.*)$', // Utilities folder imports
    '^[./]', // Relative imports
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
};
