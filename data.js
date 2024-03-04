console.log("log desde data.js")


const book1 = {
  title: "Señor de los anillos",
  author: "Tolkien"
}

const book2 = {
  title: "Harry Potter",
  author: "JK Rowling"
}

// module.exports = book1 // lo exporta para que sea accesible en otros archivos

// como exportamos multiple data?
module.exports = {
  book1: book1,
  book2
}