var express = require('express')
var path = require('path');

var app = express();
app.set('port',3000);

app.get('/',function(req,res){
    console.log('hit the root');
    res
        .status(200)
        .sendFile(path.join(__dirname,'public','index.html'));
});

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
