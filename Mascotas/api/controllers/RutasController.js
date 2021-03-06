/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {

        // res.view(String: Nombre vista, Datos JSON)

        return res.view('vistas/home');

    },
    crearUsuario: function (req, res) {

        return res.view('vistas/Usuario/crearUsuario');

    },
    listarUsuario: function (req, res) {
        Usuario.find().exec(function (err, usuariosEncontrados) {
            if (err) {
                res.view('vistas/Error', {
                    error: {
                        descripcion: "Hubo un problema cargando los usuarios",
                        rawError: err,
                        url: "/listarUsuarios"
                    }
                })
            }
            res.view('vistas/Usuario/listarUsuario.ejs', {
                usuarios: usuariosEncontrados
            });
        })
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Usuario.findOne({
                id: parametros.id
            }).exec(function (err, UsuarioEncontrado) {
                if (err) {
                    return res.view('vistas/Error', {
                        error: {
                            descripcion: "Error Inesperado",
                            rawError: "err",
                            url: "/ListarUsuarios"
                        }
                    });
                }
                if (UsuarioEncontrado) {
                    return res.view('vistas/Usuario/editarUsuario',{
                        usuarioAEditar: UsuarioEncontrado
                    })
                } else {
                    return res.view('vistas/Error', {
                        error: {
                            descripcion: "El usuario con id: " + parametros.id + " no existe.",
                            rawError: "No existe el usuario",
                            url: "/ListarUsuarios"
                        }
                    });
                }
                sails.log.info(UsuarioEncontrado);
            })
        } else {
            return res.view('vistas/Error', {
                error: {
                    descripcion: "No ha enviado el parámetro ID.",
                    rawError: "Faltan parámetros",
                    url: "/ListarUsuarios"
                }
            });
        }
    },

    error: function (req, res) {

        return res.view('vistas/Error', {
            error: {
                descripcion: "Usted está por error en esta ruta. Diríjase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
    }

};