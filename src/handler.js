const path = require('path');
const fs =require('fs');

const handleHomePage = (res) => {
const filePath = path.join(__dirname,"..","public","index.html");
fs.readFile(filePath,(err,file)=>{
  if(err) return console.log('err');
  res.writeHead(200,{"Content-type ":"text/html"});
  res.end(file);
  })
}

const handleSignup = (endpoint , res) => {
  const filePath = path.join(__dirname,"..",endpoint);
  fs.readFile(filePath,(err,file)=>{
    if(err) return console.log('err');
    const ext = endpoint.split(".");
    const extension = {
      html:"text/html",
      css:"text/css",
      js:"application/javascript",
      ico:"image/x-icon"
    };
    res.writeHead(200,{"content-type":extension[ext]});
    res.end(file);
  })

}
const handleLogin = () => {

}
const handleStatic = () => {

}
const handleSongs = () => {

}
const handleAddsong = () => {

}
const handleMyfav = () => {

}

const handlePostfav = ()=>{
  
}

const handleNotFound = () => {
  res.writeHead(200,{"Content-type ":"text/html"});
  res.end('<h2>Return to  basic page </h2>');
}
module.exports = {
  handleHomePage,
  handleSignup,
  handleLogin,
  handleStatic,
  handleSongs,
  handleAddsong,
  handlePostfav,
  handleMyfav,
  handleNotFound
};