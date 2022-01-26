//WEB SERVER - SEND.FILE METHOD
const express = require("express")
const app = express()
const path = require("path")
const pathPublic = path.join(__dirname + './public');

let pathHome = './public'.resolve(__dirname, './views/home.html')
app.use(express.static(publicPath) a pp.get('/Home', (req, res) => res.sendFile(pathHome)
})

app.listen(3030, () => {
});