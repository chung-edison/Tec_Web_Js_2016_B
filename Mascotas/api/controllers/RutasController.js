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