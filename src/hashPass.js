const crypt = require('bcrypt');

const hashPassword = (password) => {
  return crypt.hashSync(password, 10);
}

// console.log(hashPassword('123'));

const comparePassword = (password, hashed, callback) => {
  crypt.compare(password, hashed, callback);
}

module.exports = {
  hashPassword,
  comparePassword
}
// comparePassword('123', '$2b$10$lAMDQGpBY013cY/gw9NkFedELrm2X4YGwWOFlSIp0HGS6n.kxyfju', (err, res)=>{
//   console.log(res);
// })
