const express = require('express')

const path = require('path')
const app = express()

// Browder por medio de EXPRESS envia Resposta CANNOT GET / --> NO HAY INDICADO ROTA A SERVIDOR


// PARTE 01 - SEND FILE METHOD enviar HTML A SERVIDOR
const publicPlataformPath = path.join(__dirname , '/public')


app.use(express.static(publicPlataformPath))
app.get('/' ,(req, res) => {
  res.send('index')
}),
app.get('/home' ,(req, res) => {
  res.send('Home ON SERVER')
})

app.get('/LOGIN', (req, res) => {
  res.send('WS ON LOGIN')
})

app.get('/sign-up', (req, res) => {
  res.send('WS ON SIGN-UP')
})

app.get('/products' ,(req, res) => {
  res.send('WS ON PRODUCTS LIST')
})
app.get('/products/:idL' ,(req, res) => {
  res.send('WS ON PRODUCTS IDL')
})
app.get('/products/create' ,(req, res) => {
  res.send('WS ON PRODUCTS CREATE')
})
app.listen(process.env.PORT||6969, ()=>{
	console.log('Corriendo on port 6969')
})

