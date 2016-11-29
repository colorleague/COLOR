var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 3000;

// allow CORS
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, function() {
	console.log('COnsole running on ' + PORT)
});