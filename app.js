var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("<h1>hi there, Hello from NodeJS World!<p>test</p>");
  res.send("<h2>last manual test was successful!"</h2>");
  res.send("<h3>3rd test</h3>");
});

app.listen(4000);

