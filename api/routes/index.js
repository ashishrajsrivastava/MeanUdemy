var express = require('express')
var router = express.Router();

var ctrladp = require('../controllers/adp.controllers.js')

router
 .route('/json')
 .get(ctrladp.adpGetAllHotel);

module.exports = router;