const express = require('express');
const app = require('express');
const path = require('path')
app.listen(3030, () => {
	console.log('Levante servidor en port 3030')
})

// Browder por medio de EXPRESS envia Resposta CANNOT GET / --> NO HAY INDICADO ROTA A SERVIDOR


// PARTE 01 - SEND FILE METHOD enviar HTML A SERVIDOR
const publicPath = path.join(__username , './public')
console.log(publicPath)
app.get('/home' () => {
  res.send(resolve(publicPath , '/home'))
})
  

