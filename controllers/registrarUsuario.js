// primero crear un esquema con mongoose
// conectar con mongo db y crear una data base
// crear cuenta y asegurarla con json web token
// guardar la clave foranea en una cookie si es posible

const NuevoUsuario = require("../schemas/models.js");

const createUsuario = async (req, res) => {
  try {
    // req.body ---> name:string, clave:string
    console.log(req.body);
    const user = new NuevoUsuario(req.body)
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ mensajeFromControllers: error })
  }
};

// id automatico -->
// no puede repetirse el nombre
module.exports = {
  createUsuario
};
