var express = require('express')
var path = require('path');
var routes = require('./routes')

var app = express();

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
})

app.use(express.static(path.join(__dirname,'public')))
app.use('/api',routes);

app.set('port',80);


var server = app.listen(app.get('port'),function(){
    var port = server.address().port;
    console.log('some one hit you at '+port);
});
