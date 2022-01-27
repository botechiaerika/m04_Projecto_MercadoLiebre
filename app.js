const express = require('express ')

const path = require('path')

let publicPath = path.join(__dirname, './public')
console.log(publicPath);

app.listen(3030, () => {
    console.log("🖥️ LEVANTAR y RODAR WS en PORTA 3030")
})

let pathHTML = path.join(__dirname, './views')
console.log(pathHTML)
app.get('/views/home.html', (req, res) => {
    res.sendFile(resolve(path.join(pathHTML, '/home.html')))
})