const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const Product = require('./models/product')

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
});

app.post('/crearProducto', (req, res) => {
  var producto = new Product

  producto.name = req.body.name
  producto.price = req.body.price
  producto.description = req.body.description
  producto.category = req.body.category
  producto.img = req.body.img

  producto.save((err, prodcutSaved) => {
    if(err){
      res.send(`Hubo un error creando el producto: ${err}`).status(500)
    }

    res.send({prodcutSaved}).status(200)
  })
})

app.get('/obtenerProductos', (req, res) => {
  Product.find({}, (err, products) => {
    if(err){
      res.send(`Hubo un error creando el producto: ${err}`).status(500)
    }
    if(!products){
      res.send('No se encontro nada').status(404)
    }
    res.send({products}).status(200)
  })
})

app.get('/producto/:productId', (req, res) => {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if(err){
      res.send(`Hubo un error encontrando el producto: ${err}`).status(500)
    }
    if(!product){
      res.send('No se encontro el producto').status(404)
    }
    res.send({product}).status(200)

  })
})

app.delete('/borrarProducto/:productId', (req, res) => {
  let productId = req.params.productId

  Product.findByIdAndRemove(productId, (err, product) => {
    if(err){
      res.send(`Hubo un error borrando el producto: ${err}`).status(500)
    }
    res.send('Producto eliminado').status(200)
  })
})

app.put('/actualizar/:productId', (req, res) => {
  let productId = req.params.productId

  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err) => {
    if(err){
      res.send(`Hubo un error actualizando el producto: ${err}`).status(500)
    }
    res.send('Se actualizo el producto exitsamente').status(200)
  })
})

module.exports = app;