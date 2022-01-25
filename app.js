const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(path.join(__dirname + './public')))



let pathHome = path.join(__dirname, './views/home.html');
app.get('/Home', (req, res) => {
    sendFile(path.resolve(pathHome))
});

let pathPublic = path.join(__dirname, './public');
app.use(express.static(path.resolve(pathPublic)));

app.listen(3030, () => {
    console.log('LEVANTE RUTA PORT 3030')
});