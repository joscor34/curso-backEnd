var products

function obtenerProductos() {
  axios.get('http://localhost:8808/obtenerProductos',)
  .then(function(response){
    products = response.data.products
    for(var i = 0; i < products.length; i++){
      var cuerpo = document.getElementById('row')

      columna = document.createElement("div")
      columna.className += "col-xl-4 col-md-6 col-xs-8"

      espacio = document.createElement("br")
      columna.appendChild(espacio)
      columna.appendChild(espacio)
      columna.appendChild(espacio)
      
      
      tarjeta = document.createElement("div")
      tarjeta.className+= "card"

      imagenTarjeta = document.createElement("img")
      imagenTarjeta.className += "card-img-top"

      cuerpoTarjeta = document.createElement("div")
      cuerpoTarjeta.className += "card-body"

      var titulo = document.createTextNode(products[i].name)
      var precio = document.createTextNode(`$ ${products[i].price}`)
      var categoria = document.createTextNode(products[i].category)
      var description = document.createTextNode(products[i].description)
      var borrar = document.createTextNode('Borrar')

      console.log(products[i].img)
    
      imagenTarjeta.src = products[i].img

      tituloTarjeta = document.createElement("h5")
      tituloTarjeta.className += "card-title"

      subtituloTarjeta = document.createElement("h6")
      subtituloTarjeta.className += "card-subtitle mb-2 text-muted"

      descripcionTarjeta = document.createElement("p")
      descripcionTarjeta.className += "card-text"

      category = document.createElement("h6")
      category.className += "card-subtitle mb-4"

      botonBorrar = document.createElement("button")
      botonBorrar.className += "btn btn-danger"
      botonBorrar.appendChild(borrar)

      tituloTarjeta.appendChild(titulo)
      category.appendChild(categoria)
      subtituloTarjeta.appendChild(precio)
      descripcionTarjeta.appendChild(description)
      
      cuerpoTarjeta.appendChild(tituloTarjeta)
      cuerpoTarjeta.appendChild(category)
      cuerpoTarjeta.appendChild(subtituloTarjeta)
      cuerpoTarjeta.appendChild(descripcionTarjeta)
      cuerpoTarjeta.appendChild(botonBorrar)
      tarjeta.appendChild(imagenTarjeta)
      tarjeta.appendChild(cuerpoTarjeta)
      columna.appendChild(tarjeta)
      cuerpo.appendChild(columna)
    }
  })
}

window.onload = function(){
  this.obtenerProductos();
}

function agregar() {
  var params = new URLSearchParams();

  name = document.getElementById('exampleFormControlInput1').value
  imagen = document.getElementById('Imagen').value
  category = document.getElementById('categoria').value
  price = document.getElementById('inlineFormInputGroup').value
  description = document.getElementById('exampleFormControlTextarea1').value

  console.log(name)
  console.log(imagen)
  console.log(category)
  console.log(price)
  console.log(description)

  parseInt(price)

  params.append('name', name)
  params.append('price', price)
  params.append('description', description)
  params.append('category', category.toString())
  params.append('img', imagen)


  axios.post('http://localhost:8808/crearProducto', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}