var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("<h1>hi there, Hello from NodeJS World!");
  //res.send("<h2>last manual test was successful!</h2>");
  //res.send("<h3>4th test</h3>");
});

app.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");


