const express = require('express ')
const app = express()
const path = require('path')


let pathHome = './public'.resolve(__dirname, './views/home.html') app.use(express.static(publicPath) a pp.get('/Home', (req, res) => res.sendFile(pathHome)
})

});
app.get('/views/home.html', (req res) => {
    app.use(app.static(publicPath))
}) app.get('/views/home.html', (req res) => {
    res.sendFile(path.resolve(pathHome))
}) app.listen(3030, () => {
    console.log(':🎖️: PORT 3700')
})