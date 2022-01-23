const express = require('express')
const res = require('express/lib/response')
const app = express()

app.listen(3100, () => {
  console.log('Levante WEB SERVER en port 3000')
})


//CANNOT GET / EN localhost:3000 porque no definimos resposta en rua raiz
// COMMAND C FRENA EJECUCION 

app.get('/' , function(req, res){
  res.send('INGRESE A Mercado LIEBRE')
})