'use strict'

const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token')

  res.header('Access-Control-Expose-Headers', 'x-auth-token')

  next()
}); 


app.use(bodyParser.urlencoded({
  extended: true
}))


app.get('/', (req, res) => {
  res.send('todo correcto en raiz').status(200);
});

app.get('/nombre', (req, res) => {
  res.send('Hola mi nombre es jose').status(200);
});

app.post('/obtenerNombre', (req, res) => {
  var name = req.body.name;
  var apellido = req.body.lastName;

  res.send(`Hola ${name} ${apellido} Como estas?`).status(200)
})

app.listen(8000,() => {
  console.log(colors.rainbow('Felicidades tu aplicacion esta corriedo en http://localhost:8000'));
});
