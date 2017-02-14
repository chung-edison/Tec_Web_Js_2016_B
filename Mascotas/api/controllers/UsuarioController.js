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
                    apellidos: parametros.apellidos,
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
                    });
                });
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
    },

    BorrarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Usuario.destroy({
                id: parametros.id
            }).exec(function (err, usuarioRemovido) {
                if (err) {
                    res.view('vistas/Error', {
                        error: {
                            descripcion: "Tuvimos un error inesperado",
                            rawError: err,
                            url: "/listarUsuarios"
                        }
                    });
                }
                Usuario.find().exec(function (err, usuariosEncontrados) {
                    if (err) {
                        res.view('vistas/Error', {
                            error: {
                                descripcion: "Hubo un problema cargando los usuarios",
                                rawError: err,
                                url: "/listarUsuarios"
                            }
                        });
                    }
                    res.view('vistas/Usuario/listarUsuario.ejs', {
                        usuarios: usuariosEncontrados
                    });
                })
            })
        } else {
            res.view('vistas/Error', {
                error: {
                    descripcion: "Necesitamos el ID para borrar al usuario.",
                    rawError: "No envía ID",
                    url: "/listarUsuarios"
                }
            });
        }
    },

    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.idUsuario && (parametros.nombres || parametros.apellidos || parametros.correo)) {

            var usuarioAEditar = {
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            }

            if (usuarioAEditar.nombres == "") {
                delete usuarioAEditar.nombres
            }
            if (usuarioAEditar.apellidos == "") {
                delete usuarioAEditar.nombres
            }
            if (usuarioAEditar.correo == "") {
                delete usuarioAEditar.nombres
            }

            Usuario.update({
                id: parametros.id
            }, usuarioAEditar).exec(function (err, usuarioRemovido) {
                if (err) {
                    res.view('vistas/Error', {
                        error: {
                            descripcion: "Tuvimos un error inesperado",
                            rawError: err,
                            url: "/listarUsuarios"
                        }
                    });
                }
                Usuario.find().exec(function (err, usuariosEncontrados) {
                    if (err) {
                        res.view('vistas/Error', {
                            error: {
                                descripcion: "Hubo un problema cargando los usuarios",
                                rawError: err,
                                url: "/listarUsuarios"
                            }
                        });
                    }
                    res.view('vistas/Usuario/listarUsuario.ejs', {
                        usuarios: usuariosEncontrados
                    });
                })
            })
        } else {
            res.view('vistas/Error', {
                error: {
                    descripcion: "Necesitamos el ID para borrar al usuario.",
                    rawError: "No envía ID",
                    url: "/listarUsuarios"
                }
            });
        }
    }

};