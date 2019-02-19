const {
    handleHomePage,
    handleSignup,
    handleLogin,
    handleStatic,
    handleSongs,
    handleAddsong,
    handlePostfav,
    handleMyfav,
    handleNotFound
} = require('./handler')

const router = ((request, response) => {
   const endPoint = request.url;
    if (endPoint === '/') {
        handleHomePage(response);
    } else if (endPoint === '/signup') {
        handleSignup(request, response);
    } else if (endPoint === '/login') {
       handleLogin (request, response)
    } else if (endPoint.includes('public')) {
        handelStatic(endPoint, response)
    } else if (endPoint === '/songs') {
       handleSongs (request, response)
    } else if (endPoint === '/addsong') {
       handleAddsong (request, response)
    }else if (endPoint === '/postfav') {
       handlePostfav (request, response)
    }else if (endPoint === '/myfav') {
        handleMyfav(request, response)
    } else {
        handelNotFound(response)
    }
})

module.exports = router;
