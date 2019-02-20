const fs = require('fs');
const path = require('path');

const handleHomePage =(res) =>{
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) return handleNotFound(res);
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.end(file);
  });
}


const handleSignup = () => {
  

}
const handleLogin = () => {

}
const handleStatic = (endpoint , res) => {
  const ext = path.extname(endpoint).split('.')[1];
  const contentType= {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    json: 'application/json',
    ico: "image/x-icon"
  };
  const filePath = path.join(__dirname,"..",...endpoint.split('/'));
  fs.readFile(filePath,(err,file)=>{
    if(err) handleNotFound(res);
    res.writeHead(200,{"content-type":contentType[ext]});
    res.end(file);
  })
}
const handleSongs = () =>{
    
}
const handleAddsong = () =>{

}
const handleMyfav = () =>{

}
const handleServerError = (res) =>{

}
const handleNotFound =(res) =>{

}

module.exports = {
  handleHomePage,
  handleSignup,
  handleNotFound,
  handleServerError,
  handleMyfav,
  handleStatic,
  handleLogin,
  handleAddsong,
  handleSongs
}