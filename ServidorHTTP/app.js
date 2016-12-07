var express = require('express')
var fs = require('fs')
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

var contador = 3;


//var quePasa = '';
//quePasa = 'esta por leer el archivo';
//console.log(quePasa);
//
//fs.readFile('./paginas/pagina.html','utf8',
//           function(error, archivoLeido){
//    console.log(error);
//    console.log(archivoLeido);
//})
//
//quePasa = 'termino de leer el archivo';
//console.log(quePasa);

app.get('/', function (req, res) {
    console.log('antes de leer');
    var todo = '';
    fs.readFile('./paginas/pagina.html', 'utf8',
        function (error, archivoLeido) {
            todo += archivoLeido;
            fs.readFile('./paginas/usuario.html', 'utf8',
                function (error, archivoLeido) {
                    todo += archivoLeido;
                    fs.readFile('./paginas/footer.html', 'utf8',
                        function (error, archivoLeido) {
                            todo += archivoLeido;
                            res.send(todo);
                        })
                })
        })
    console.log('despues de leer');
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

app.post('/Usuario', function (req, res) {
    
    console.log(req.query.nombre);
    console.log(req.query.nombre);
    
    if(!req.query.nombre){
        res.send('No envio el nombre');
    }
    
    if(!req.query.cedula){
        res.send('No envio la cedula');
    }
    
    var nuevoUsuario = {
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula
    }
    
    usuarios.push(nuevoUsuario);
    
    contador = contador++;
    res.json(nuevoUsuario);
})

app.put('/Usuario/:idUsuario', function (req, res) {
    //implementacion
    //El Usuario Actualizado
})

app.delete('/Usuario/:idUsuario', function (req, res) {
    //implementacion
    //El Usuario Borrado
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})