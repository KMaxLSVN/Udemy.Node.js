const chalk = require('chalk');
const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();

  const dublicateNote = notes.find((note) => note.title === title);

  if (!dublicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveData(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }

  console.log(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveData(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.inverse('Your notes'));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveData = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
