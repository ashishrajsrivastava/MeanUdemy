var express = require('express')
var path = require('path');

var app = express();

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
})

app.use(express.static(path.join(__dirname,'public')))
app.set('port',3000);



app.get('/json',function(req,res){
    console.log('hit the api');
    res
        .status(200)
        .json({'jsonData':true});
});

app.get('/file',function(req,res){
    console.log('hit the file');
    res
        .status(200)
        .sendFile(path.join(__dirname,'app.js'));
});

var server = app.listen(app.get('port'),function(){
    var port = server.address().port;
    console.log('some one hit you at '+port);
});
