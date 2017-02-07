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
    error: function (req, res) {

        return res.view('vistas/Error', {
            error: {
                descripcion:"Usted está por error en esta ruta. Diríjase a Inicio",
                rawError:"Ruta equivocada",
                url:"/Inicio"
            }
        });
    }

};