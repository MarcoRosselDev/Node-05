const logger = (req, res, next) =>{
    const url = req.url;
    const method = req.method;
    console.log(url, method, `<--- from ${url} url'`);
    next(); // <-- clave, si no lo aplico no se puede seguir enviando recursos
    // middleware, super poderoso para cualquier algorithmo entre peticiones
    // y para no repetir el codigo
}

module.exports = logger;