const crypt = require('bcrypt');

const hashPassword = (password) => {
  crypt.genSaltSync(10, (err, salt) => {
    return crypt.hashSync(password, salt);
  });
}

const comparePassword = (password, hashed, callback)=>{
    crypt.compare(password, hashed, callback);
}

module.exports = {
  hashPassword,
  comparePassword
}