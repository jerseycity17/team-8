const redirect = {};

redirect.ifLoggedIn = (route = '/profile') =>
  (req, res, next) => (req.user ? res.redirect(route) : next());


redirect.ifNotLoggedIn = (route = '/login') =>
  (req, res, next) => (req.user ? next() : res.redirect(route));


module.exports = redirect;
