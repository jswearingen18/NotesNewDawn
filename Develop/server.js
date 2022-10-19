// importing express
const express = require('express');
// setting up a server port with 3001
const PORT = process.env.PORT || 3001;
// calling upon express and setting it as app
const app = express();
// setting up path to connect
const path = require('path');
// express . get request with request and response for notes html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});
// express . get request with request and response for index html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});
// express . listen for server port and will console log a clickable link in console
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
    );