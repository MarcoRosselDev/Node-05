const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log(err);
    return res.status(500).json({msj:'Algo salio mal, porfavor intenta denuevo.'})
}

module.exports = errorHandlerMiddleware;