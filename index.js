var express = require("express");
var app = express();

var router = require("./routeConfig/route");
app.use(router);
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'html')
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server up");
})