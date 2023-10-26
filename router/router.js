const express = require('express');
const router = express.Router();
const {getOne} = require('../controllers/mongoDriver.js')
const {todosLosDocumentos} = require('../controllers/mongoose.js');
const {createUsuario} = require('../controllers/registrarUsuario.js')

//router.route('/').get(getOne)
router.route('/').post(createUsuario);
router.route('/mdb').get(todosLosDocumentos);

module.exports = router;