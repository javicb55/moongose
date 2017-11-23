var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/ejercicio');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({

  id         : Number,
  sexo       : String,
  edad       : Number,
  nombre     : String

});

var Usuario = mongoose.model('Usuario' , usuarioSchema);

module.exports.Usuario = Usuario;
module.exports.db   = db;
