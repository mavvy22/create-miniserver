import fs from 'fs-extra';

function main() {
  console.log('creating template');

  fs.copySync('./template', process.cwd());
}

main();
