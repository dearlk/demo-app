var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("<h1>hi there!</h1><h2 style="color:blue"> Hello from Demo App!</h2>");

});

app.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");


