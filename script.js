console.log("patata")

// require("./data") 
const importedData = require("./data") 
// 1. ejecuta todo el código que hay en data.js
// 2. busca cualquier data que esté siendo exportada y la trae de a este archivo

console.log(importedData)

// const someFunctions = require("./data2")
// const result = someFunctions.describirLibro(importedData.book1)

const { describirLibro } = require("./data2")
const result = describirLibro(importedData.book1)
console.log(result)