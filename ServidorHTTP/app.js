var express = require('express')
var app = express()

var usuarios = [
    {
        id: 1,
        nombre:'Pepe',
        cedula:'1234567342'
    },
    {
        id: 2,
        nombre:'Carlos',
        cedula:'1764567342'
    },
    {
        id: 3,
        nombre:'Juan',
        cedula:'1234534342'
    }
]

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/Usuario', function (req, res) {
    res.json(usuarios);
})

app.get('/Usuario/:idUsuario', function (req, res) { //http://localhost:3000/Usuario/2 
    var idActual = req.params.idUsuario;
    for(var i = 0; i < usuarios.length; i++){
        if(idActual == usuarios[i].id) {
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario')
})

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con javascript!')
})

app.post('/TecnologiasWeb', function (req, res) {
    
    //request => req
    //response => res
    
    var parametros = req.params
    console.log(parametros);
    
    var usuario = {
        nombre:'Edison',
        cedula:'0000000000'
    }
    
    res.append('token','1234');
    res.json(usuario);
    
//    console.log('Lo que tengo en el request es:');
//    console.log(req);
//    console.log('Lo que tengo en el response es:');
//    console.log(res);
//
//    console.log('Cabeceras request:');
//    console.log(req.headers);
//    console.log('Cabeceras response:');
//    console.log(res.headers);
      
  //no se pueden enviar multiples res.send()
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})