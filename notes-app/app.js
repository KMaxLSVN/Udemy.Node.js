const chalk = require('chalk');

const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

const coloredMsg = chalk.inverse.bold.blue('Success!');

console.log(coloredMsg);
