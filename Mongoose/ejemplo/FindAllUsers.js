var User = require('./user.js');

User.find({},function(err,users)){
  if(err) throw err;
  console.log(users);
}
