module.exports = function(req, res, next) {

  if (req.session.credencialSegura) {
    return next();
  }

  return res.forbidden('Usted no puede entrar a esta ruta.');
};
