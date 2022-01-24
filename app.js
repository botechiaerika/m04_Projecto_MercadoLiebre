//WEB SERVER - SEND.FILE METHOD
const express = require('express')
const app = express()
const path = require('path')

app.get('/Home', (req, res) => {
    let pathHome = path.resolve(__dirname, './views/home.html')
    res.sendFile(pathHome)
});

app.listen(3030, () => {
    console.log('LEVANTE RUTA PORT 3030')
});