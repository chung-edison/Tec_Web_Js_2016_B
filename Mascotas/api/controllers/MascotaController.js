/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearMascota: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre && parametros.paisNacimiento && parametros.idRaza) {
        Mascota.create({
          nombre: parametros.nombre,
          fechaNacimiento: parametros.fechaNacimiento,
          paisNacimiento: parametros.paisNacimiento,
          idRaza: parametros.idRaza,
        }).exec(function (error, mascotaCreado) {
          if (error) return res.view('vistas/Error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la mascota, intentalo de nuevo',
              rawError: error,
              url: '/crearMascota'
            }
          });

          Mascota.find().exec(function (error, mascotasEncontrados) {
            if (error) {
              return res.view('vistas/Error', {
                title: 'Error',
                error: {
                  descripcion: 'Hubo un error listando las mascotas',
                  rawError: error,
                  url: '/listarMascotas'
                }
              });
            }
            return res.view('vistas/Mascota/listarMascotas', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontrados
            })
          });

        });
      } else {
        // bad Request
        return res.view('vistas/Error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            rawError: "Faltan parámetros.",
            url: '/crearMascota'
          }
        });
      }
    } else {
      return res.view('vistas/Error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          rawError: "Método HTTP erróneo.",
          url: '/crearMascota'
        }
      });
    }

  },
  editarMascota: function (req, res) {
    var parametros = req.allParams();
    sails.log.info(parametros);
    if (req.method == 'POST') {
      if (parametros.nombre && parametros.paisNacimiento && parametros.idRaza) {
        Mascota.update({
          id: parametros.id
        }, {
          nombre: parametros.nombre,
          fechaNacimiento: parametros.fechaNacimiento,
          paisNacimiento: parametros.paisNacimiento,
          idRaza: parametros.idRaza,
        }).exec(function (error, mascotaActualizada) {
          if (error) {
            return res.view('vistas/Error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo un error actualizando la mascota',
                rawError: error,
                url: '/listarMascotas'
              }
            });
          }
          Mascota.find().exec(function (error, mascotasEncontradas) {
            if (error) {
              return res.view('vistas/Error', {
                title: 'Error',
                error: {
                  descripcion: 'Hubo un error listando las mascotas',
                  rawError: error,
                  url: '/listarMascotas'
                }
              });
            }
            return res.view('vistas/Mascota/listarMascotas', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontradas
            })
          });
        });
      } else {
        // bad Request
        return res.view('vistas/Error', {
          title: 'Error',
          error: {
            descripcion: 'No envía todos los parametros',
            rawError: "Faltan parámetros.",
            url: '/editarMascota'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('vistas/Error', {
        title: 'Error',
        error: {
          descripcion: 'Fallo en el método HTTP',
          rawError: "Método HTTP erróneo.",
          url: '/editarMascota'
        }
      });
    }
  }
};
