#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

function main() {
  const rootName = process.argv[2];

  console.log('creating template');

  fs.copySync(
    path.join(__dirname, 'template'),
    path.join(process.cwd(), rootName),
  );
}

main();
