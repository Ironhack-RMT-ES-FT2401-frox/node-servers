const http = require('http');

const myServer = http.createServer((req, res) => {
  // req es REQUEST => indica toda la instruccion de la solicitud del cliente
  // res es RESPONSE => indica toda la respuesta que le entregaremos al cliente
  console.log("un cliente me está contactando")

  console.log(req.url)
  if (req.url === "/") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
  } else if (req.url === "/patata") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Aqui tienes una patata');
    res.end();
  }

})


myServer.listen(5005);