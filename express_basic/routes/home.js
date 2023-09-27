const express = require('express');
const router = express.Router();
const {getHome, getHomeID, postHome} = require('../controllers/test.js')

router.get('/', getHome)
router.get('/:id', getHomeID)
router.post('/', postHome)

module.exports.person = router;