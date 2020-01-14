'use strict'

const express = require('express');
const colors = require('colors');

const app = express();

app.get('/', (req, res) => {
  res.send('todo correcto en raiz').status(200);
});

app.get('/nombre', (req, res) => {
  res.send('Hola mi nombre es jose').status(200);
});

app.listen(8000,() => {
  console.log(colors.rainbow('Felicidades tu aplicacion esta corriedo en http://localhost:8000'));
});