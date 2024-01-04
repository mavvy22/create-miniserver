#!/usr/bin/env node

import fs from 'fs-extra';

function main() {
  const argv = process.argv;
  console.log(argv);
  console.log('creating template');

  fs.copySync('./template', process.cwd());
}

main();
