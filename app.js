const express = require('express')
const app = express()

app.listen(3030, () => {
  console.log('Levante WEB SERVER en port 3030')
})


//CANNOT GET / EN localhost:3000 porque no definimos resposta en rua raiz
// COMMAND C FRENA EJECUCION 
