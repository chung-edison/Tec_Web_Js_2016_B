/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {

        if (req.method == 'POST') {

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