#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';

function main() {
  const rootName = process.argv[2];

  console.log('creating template');

  fs.copySync(
    path.join(path.dirname, 'template'),
    path.join(process.cwd(), rootName),
  );
}

main();
