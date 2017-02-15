/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');

module.exports = {
    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            Usuario.findOne({
                correo: parametros.correo
            }).exec(function (err, usuarioEncontrado) {
                if (err) {
                    res.view('vistas/Error', {
                        error: {
                            descripcion: "Tuvimos un error inesperado",
                            rawError: err,
                            url: "/Login"
                        }
                    });
                }
                if (usuarioEncontrado) {
                    Passwords.checkPassword({
                        passwordAttempt: parametros.password,
                        encryptedPassword: usuarioEncontrado.password
                    }).exec({
                        // An unexpected error occurred.
                        error: function (err) {
                            res.view('vistas/Error', {
                                error: {
                                    descripcion: "Tuvimos un error inesperado",
                                    rawError: err,
                                    url: "/Login"
                                }
                            });
                        },
                        // Password attempt does not match already-encrypted version
                        incorrect: function () {
                            return res.view('vistas/Error', {
                                error: {
                                    descripcion: "Vuelva a ingresar su contraseña.",
                                    rawError: "Contraseña incorrecta.",
                                    url: "/Login"
                                }
                            });
                        },
                        // OK.
                        success: function () {
                            req.session.credencialSegura = usuarioEncontrado;
                            return res.view("vistas/home")
                        },
                    });
                } else {
                    return res.view('vistas/Error', {
                        error: {
                            descripcion: "No se encontró al Usuario",
                            rawError: "No existe el usuario.",
                            url: "/Login"
                        }
                    });
                }
            });
        } else {
            return res.view('vistas/Error', {
                error: {
                    descripcion: "Necesitamos su correo y password.",
                    rawError: "No envía parámetros.",
                    url: "/Login"
                }
            });
        }
    },
    tieneSesion: function (req, res) {
        if (req.session.credencialSegura) {
            return res.ok("Si tiene la credencial segura")
        } else {
            return res.forbidden();
        }
    },
    logout: function (req, res) {
        req.session.credencialSegura = undefined;
        return res.view("login");
    }
}