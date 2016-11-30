var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con javascript!')
})

app.post('/TecnologiasWeb', function (req, res) {
    
    //request => req
    //response => res
    
    var usuario = {
        nombre:'Edison',
        cedula:'0000000000'
    }
    
    usuario.apellido = 'Chung';
    usuario.mascotas = [];
    usuario.casado = false;
    
    res.append('token','1234');
    
    console.log('Lo que tengo en el request es:');
    console.log(req);
    console.log('Lo que tengo en el response es:');
    console.log(res);

    console.log('Cabeceras request:');
    console.log(req.headers);
    console.log('Cabeceras response:');
    console.log(res.headers);
    
  res.json(usuario);
  
  //no se pueden enviar multiples res.send()
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})