const handleHomePage =() =>{

}

const handleSignup = () => {
  

}
const handleLogin = () => {

}
const handleStatic = (endpoint , res) => {
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
const handleSongs = () =>{
    
}
const handleAddsong = () =>{

}
const handleMyfav = () =>{

}
const handleServerError = () =>{

}
const handleNotFound =() =>{

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