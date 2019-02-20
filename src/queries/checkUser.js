const connect = require('../database/db_connection');

const checkUserEmail = (email, callback) => {
    const text = 'SELECT user_id from users where users.email = $1';
    const values = [email];
    connect.query(text, values, callback);
}

// checkUserEmail('israa@gmail.com', (err, res)=>console.log(err, res));

module.exports = checkUserEmail;
