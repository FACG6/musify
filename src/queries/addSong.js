const connection = require('../database/db_coonction.js');
const insertData = connection.query(`INSERT INTO USERS ( ) VALUES ${}` ,(error ,res)=>{
    if(error) cb (error);
    cb(null ,res);
});
