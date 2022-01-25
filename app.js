<<<<<<< HEAD
// WEB SERVER - SEND.FILE METHOD

const express = require('express')
const app = express();
=======
//WEB SERVER - SEND.FILE METHOD
const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(path.join(__dirname + './public')))



express.static(path.join(__dirname, './views/home.html') res.app.get('/Home', (req, res) => {
        sendFile(pathHome)
    });

    function(req, res, next) {
        res.render('home.ejs');
    })
>>>>>>> 289585e90b34005c140bc624d160f339dc9b7596

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