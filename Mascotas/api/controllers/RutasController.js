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
          return res.view('vistas/Usuario/editarUsuario', {
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
  },
  crearMascota: function (req, res) {
    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError();
      return res.view('vistas/Mascota/crearMascota', {
        title: 'Crear Mascota',
        razas: razasEncontrados
      });
    });

  },
  listarMascotas: function (req, res) {
    Mascota.find().exec(function (error, mascotasEncontrados) {
      if (error) return res.serverError()
      return res.view('vistas/Mascota/listarMascotas', {
        title: 'Lista de Mascotas',
        mascotas: mascotasEncontrados
      })
    });
  },
  editarMascota: function (req, res) {

    var parametros = req.allParams();
    if (parametros.id) {
      Mascota.findOne({
        id: parametros.id
      }).exec(function (error, mascotaEncontrado) {
        if (error) return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'Fallo al buscar la mascota',
            url: '/crearMascotas'
          }
        });


        Raza.find().exec(function (error, razasEncontrados) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Fallo al buscar la mascota',
              url: '/crearMascotas'
            }
          });

          return res.view('vistas/Mascota/editarMascota', {
            title: 'Editar Mascota - ' + mascotaEncontrado.nombre,
            mascota: mascotaEncontrado,
            razas: razasEncontrados
          })
        });

      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  crearRaza: function (req, res) {
    return res.view('vistas/Raza/crearRaza');
  },
  listarRazas: function (req, res) {
    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError()
      return res.view('vistas/Raza/listarRazas', {
        title: 'Lista de Razas',
        razas: razasEncontrados
      })
    });
  },
  editarRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Raza.findOne({
        id: parametros.id
      }).exec(function (error, razaEncontrada) {
        if (error) return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'Fallo al buscar la raza',
            url: '/crearRaza'
          }
        });
        return res.view('vistas/Raza/editarRaza', {
          title: 'Editar Raza - ' + razaEncontrada.nombre,
          raza: razaEncontrada
        })
      });
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
};
