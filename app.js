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

app.listen(3030, () => {
    console.log('LEVANTE RUTA PORT 3030')
});