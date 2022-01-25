// WEB SERVER - SEND.FILE METHOD
const express = require('express');
const app = express();

app.listen(3030, () => {
    console.log('LEVANTE RUTA PORT 3030')
});

// LEVANTAR HTML EN WEB SERVER:

const path = require('path');
const pathPublic = path.resolve(__dirname, '. / public');
app.use(express.static('public'));

app.get('/home', (req, res) => {
    let pathHome = path.resolve(__dirname, './views/home.html')
    res.sendFile(pathHome)
})