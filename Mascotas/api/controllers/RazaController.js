/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearRaza: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre) {
        Raza.create({
          nombre: parametros.nombre,
        }).exec(function (error, razaCreada) {
          if (error) return res.view('vistas/Error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la raza, intentalo de nuevo',
              rawError: error,
              url: '/crearRaza'
            }
          });
          Raza.find().exec(function (error, razasEncontradas) {
            if (error) {
              return res.view('vistas/Error', {
                title: 'Error',
                error: {
                  descripcion: 'Hubo un error listando las razas',
                  rawError: error,
                  url: '/listarRazas'
                }
              });
            }
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontrados
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
            url: '/crearRaza'
          }
        });
      }
    } else {
      return res.view('vistas/Error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          rawError: "Método HTTP erróneo.",
          url: '/crearRaza'
        }
      });
    }

  },
  editarRaza: function (req, res) {
    var parametros = req.allParams();
    if (req.method == 'POST') {
      if (parametros.nombre && parametros.id) {
        Raza.update({
          id: parametros.id
        }, {
          nombre: parametros.nombre,
        }).exec(function (error, razaActualizada) {
          if (error) {
            return res.view('vistas/Error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo un error actualizando la raza',
                rawError: error,
                url: '/listarRazas'
              }
            });
          }
          Raza.find().exec(function (error, razasEncontradas) {
            if(error) {
              return res.view('vistas/Error', {
                title: 'Error',
                error: {
                  descripcion: 'Hubo un error listando las razas',
                  rawError: error,
                  url: '/listarRazas'
                }
              });
            }
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontradas
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
            url: '/editarRaza'
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
          url: '/editarRaza'
        }
      });
    }
  }
};
