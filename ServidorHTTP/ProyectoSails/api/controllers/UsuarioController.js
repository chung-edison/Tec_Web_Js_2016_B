/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    crearUsuario: function (req, res) { //Usuario/crearUsuario

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method == 'POST') {

            if (parametros.nombres && parametros.apellidos) {

                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (err, usuarioCreado) {
                    if (err) {
                        return res.serverError(err)
                    }
                    sails.log.info(usuarioCreado);
                    return res.ok(usuarioCreado);
                });
            } else {

                return res.badRequest('No envía todos los parámetros.');
            }
        } else {
            return res.badRequest('Método inválido.');
        }

        //  /Usuario/crearUsuario

        //        Usuario.create({
        //            nombres: 'Pepe Jose',
        //            apellidos: 'Icaza Rey',
        //            correo: 'pepe.icaza@gmail.com'
        //        }).exec(function (err, usuarioCreado){
        //            if(err) {
        //                return res.serverError(err)
        //            }
        //            sails.log.info(usuarioCreado);
        //            return res.ok(usuarioCreado);
        //        });


    }

};