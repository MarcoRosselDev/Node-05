const authorize = (req, res, next) =>{
    console.log('future authorized logic');
    next()
}

module.exports = authorize;