#!/usr/bin/env node
const parser = require('../lib/parser');
console.log('purge started');
const arguments =  process.argv.splice(2);
console.log(arguments);
let fileUrl = arguments[0];

parser.parse(fileUrl);