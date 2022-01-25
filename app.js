//WEB SERVER - SEND.FILE METHOD
const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(path.join(__dirname + './public')))

<<<<<<< Updated upstream


express.static(path.join(__dirname, './views/home.html') res.app.get('/Home', (req, res) => {
        sendFile(pathHome)
    });

    function(req, res, next) {
        res.render('home.ejs');
    })

=======
app.get('/Home', (req, res) => {
    let pathHome = './public'.resolve(__dirname, './views/home.html')
    res.sendFile(pathHome)
});
app.use(express.static(path.join(__dirname, './public')));
>>>>>>> Stashed changes
app.listen(3030, () => {
    console.log('LEVANTE RUTA PORT 3030')
});