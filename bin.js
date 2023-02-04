#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const code = `
// https://github.com/arthurfiorette/prettier-config

module.exports = require('@arthurfiorette/prettier-config')({
  // Any options here will override @arthurfiorette/prettier-config defaults
});
`.trim();

fs.writeFileSync(path.resolve(process.cwd(), '.prettierrc.js'), code);

console.log(
  '\x1b[7mCreated .prettierrc.js file with @arthurfiorette/prettier-config\x1b[0m'
);
