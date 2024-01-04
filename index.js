#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

function main() {
  const rootName = process.argv[2];

  const mainDir = path.join(process.cwd(), rootName);

  console.log('Creating template');

  fs.copySync(path.join(__dirname, 'template'), mainDir);

  const packageJsonPath = path.join(mainDir, 'package.json');
  const packageJson = fs.readJsonSync(packageJsonPath);

  packageJson.name = rootName;

  fs.writeJSONSync(packageJsonPath, packageJson, { spaces: 2 });

  console.log('Done');
  console.log(`cd ${rootName}`);
  console.log('RUN npm install');
}

main();
