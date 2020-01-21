'use strict'

const colors = require('colors')
const app = require('./app')
const mongoose = require('mongoose')
const llaves = require('./llaves')


mongoose.connect(llaves.MONGOURL, (err) => {
  if(err){
    console.log(err);
  }
  app.listen(llaves.PORT,() => {
    console.log(colors.rainbow(`Felicidades tu aplicacion esta corriedo en http://localhost:${llaves.PORT}`));
  })
});
