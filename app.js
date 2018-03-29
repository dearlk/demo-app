var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("<h1>hi there, Hello from NodeJS World!");
});

app.listen(4000);

