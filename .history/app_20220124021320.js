const express = require('./node_modules/express');
const app = express();
const path = require('path')




app.get('/home', (req, res) => {
    console.log(__dirname);
    // mostra variable ubicacion archivo html en pc
    let htmlHome = path.resolve(__dirname, './mercadoLIEBRE/views/home.html');
    res.sendFile(path.join(htmlHome))
})



app.listen(3030, () => {
console.log('Levante servidor en port 3030')
}) gitt
})