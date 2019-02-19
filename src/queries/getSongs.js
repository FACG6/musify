const connection = require('../database/db_coonction.js');
const getData = connection.query('select * from songs',(error ,res)=>{
    if(error) cb(error);
    cb(null ,res.rows);
})
module.exports = getData;