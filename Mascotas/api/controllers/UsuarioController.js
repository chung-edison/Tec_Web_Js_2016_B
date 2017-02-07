/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {

        if (req.method == 'POST') {
            var parametros = req.allParams();
            if (parametros.nombres && parametros.apellidos) {
                var usuarioCrear = {
                    nombres: parametros.nombres,
                    apellidos: paramentros.apellidos,
                    correo: parametros.correo
                }
                if (parametros.correo == "") {
                    delete usuarioCrear.correo;
                }
                Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {
                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                descripcion: "Fallo al crear un usuario.",
                                rawError: "err",
                                url: "/CrearUsuario"
                            }
                        })
                    }
                    return res.view('vistas/Usuario/crearUsuario');
                })
            } else {
                return res.view('vistas/Error', {
                    error: {
                        descripcion: "Llene todos los parámetros: nombres y apellidos.",
                        rawError: "Fallo en envío de parámetros",
                        url: "/CrearUsuario"
                    }
                });
            }
        } else {
            return res.view('vistas/Error', {
                error: {
                    descripcion: "Error en el uso del método HTTP.",
                    rawError: "HTTP inválido",
                    url: "/CrearUsuario"
                }
            });
        }
    }
};