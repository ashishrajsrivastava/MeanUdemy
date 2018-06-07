var express = require('express')
var router = express.Router();

router
 .route('/json')
 .get(function(req,res){
    console.log('get the json');
    res
        .status(200)
        .json({'jsonData':true});
 })
 .post(function(req,res){
    console.log('post the json');
    res
        .status(200)
        .json({'jsonData':"Post recieved"});
 });

module.exports = router;