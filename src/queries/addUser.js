const connect = require('../database/db_connection');
const {hashPassword,comparePassword} = require('../hashPass');

const addUser = (firstName, lastName, email, password, callback) => {
    const hashedPassword = hashPassword(password)
    const text = 'INSERT INTO songs (songName,singerName) Values($1, $2, $3, $4)';
    const values = [firstName, lastName, email, hashedPassword];
    connect.query(text, values, callback);
}

module.exports = addUser;



