const connect = require('../database/db_connection');

const getSongs = (cb)=>{
connect.query("SELECT songName, singerName FROM songs", cb)
}

// getSongs((err, res)=>{
//     if (err) console.log(err);
//     else console.log(res);
// });

module.exports = getSongs;