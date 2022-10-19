const fs = require('fs');
// importing express
const express = require('express');
// setting up a server port with 3001
const PORT = process.env.PORT || 3001;
// calling upon express and setting it as app
const app = express();
// setting up path to connect
const path = require('path');
// setting up a router through express
const router = require('express').Router();
// express . get to set up path to db
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
});
// allows user to add notes by using post method
app.post('/api/notes', (req, res) => {
    let newNote = req.body
    let addNote = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    let noteLength = addNote.length.toString()
    newNote.id = noteLength
    addNote.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(addNote))
    res.json(addNote)
});

// express . get request with request and response for notes html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});
// express . get request with request and response for index html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});
// allows user to delete notes that are taken
app.delete('/api/notes/:id', (req, res) => {
    let readNote = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    let noteId = req.params.id.toString()  
    readNote = readNote.filter(deleteNote => {return deleteNote.id != noteId})   
    fs.writeFileSync('./db/db.json', JSON.stringify(readNote))
    res.json(readNote)
});
// express . listen for server port and will console log a clickable link in console
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
    );