#! /usr/bin/env node
require('colors');
const program = require('commander');
const { exec } = require('child_process');
let { version } = require('./package.json');
// version 版本号
// name 项目名称
program
  .version(version, '-v, --version')
  .command('create <name>')
  .action((name) => {
    console.log('clone template ...');
    exec(`git clone https://github.com/liqingjie/up-vue-template.git ${name}`, function(error, stdout, stderr) {
      if (error !== null) {
        console.log(`exec error: ${error}`.red);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log('clone success'.green);
    });
  });
program.parse(process.argv);
