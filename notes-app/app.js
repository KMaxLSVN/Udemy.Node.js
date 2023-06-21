const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

// Customise yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note.',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes.',
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a notes.',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// To activate all parameters
yargs.parse();

const command = process.argv[2];

// console.log(process.argv);

// if (command === 'add') {
//   console.log('Adding note!');
// } else if (command === 'remove') {
//   console.log('Remove note!');
// }
