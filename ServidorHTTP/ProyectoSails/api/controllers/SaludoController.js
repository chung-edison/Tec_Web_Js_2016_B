/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    hola:function(req,res){
        
        var params = req.allParams();
        
        if(req.method=='GET')
        res.json({
            nombre: 'hola get',
            parametros: params
        });
        else if(req.method=='POST')
        res.json({
            nombre: 'hola post'
        });
        else
        res.json({
            nombre: 'hola a todos'
        });
    },
    adios:function(req,res){
        res.send('Adios');
    },
    hora:function(req,res){
        res.send('Hora');
    }
    
};

