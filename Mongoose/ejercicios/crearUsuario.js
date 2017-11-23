var usuario = require ('./usuario.js ') ;
var nuevoUsuario = Usuario({

    id     : 2000,
    sexo   : 'Male',
    edad   : 100,
    nombre : "Nuevo usuario desde Moongose"

});

nuevoUsuario.save(function(err){

  if(err) throw err;
  console.log("Usuario Creado");

});
