var User = require('./user.js').User;
var db   = require('./user.js').db;

var newUser = User({
  id         : 1001,
  first_name : 'joaquin',
  last_name  : 'Reyes García',
  email      : 'joaquin@dominio.com'
});

newUser.save(function(err){
  if (err) throw err;
  console.log('Usiario creado con id ' + newUser.id);
});
