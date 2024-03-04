require('dotenv').config()

const express = require('express')
const app = express()

const morgan = require('morgan')
app.use( morgan("dev") )

// configurar en el servidor, donde estarán ubicados todos los archivos estaticos (css, imagenes, js, videos, fuentes, etc...)
app.use( express.static("public") )

const libros = [
  {
    id: "1",
    title: "Señor de los anillos",
    author: "Tolkien"
  },
  {
    id: "2",
    title: "Harry Potter",
    author: "JK Rowling"
  },
  {
    id: "3",
    title: "Dune",
    author: "Frank Herbert"
  },
  {
    id: "4",
    title: "MundoDisco",
    author: "Terry Pratchet"
  }
]

// esto es una Ruta de contacto cliente-servidor
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/patata", (req, res) => {
  res.send("Aqui tienes una patata")
})

app.get("/ejemplo-solicitud-data", (req, res) => {
  // axios.get("una api") => response
  // axios.get("otra api") => response
  // llamo a una DB => response

  // checkeo si el usuario tiene registro

  // res.send(la respuestas al cliente)
})


// app.use se usa para ejecutar funciones entre la llamada del cliente y la ruta que recibe esa llamada
app.use((req, res, next) => {
  // console.log("esto siempre se ejecuta antes de entrar a las rutas /libros y /libros/:libroId")

  // queremos que haga una funcionalidas
  // ejemplos:
  // 1. Para autenticacion (validar que el usuario es el correcto y puede acceder a esta data a continuacion)
  // 2. verificacion de error.
  // 3. configuraciones adicionales de paquetes externos

  // ... y luego CONTINUE con la verificacion de las rutas que adelante
  next()

})

app.get("/libros", (req, res) => {
  res.json(libros) // respuestas de data (formato json)
}) 

app.get("/libros/:libroId", (req, res) => {

  // 1. determinar como accedemos a ese valor dinamico
  console.log(req.params)

  // 2. con ese id, como lo filtramos del array de la data
  const filteredLibro = libros.filter((eachLibro) => {
    return eachLibro.id === req.params.libroId
  })

  res.json(filteredLibro[0])
})


// Rutas que envien archivos de HTML
app.get("/home", (req, res, next) => {
  console.log(__dirname) // la direccion absoluta de donde está ubicado este servidor
  // res.sendFile("./views/home.html") // no funciona :(
  res.sendFile(__dirname + "/views/home.html")
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})