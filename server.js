var express = require('express');
var app = express();
var path = require('path');
//var favicon = require('serve-favicon');
var favicon = require('express-favicon');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));
//app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use(favicon(__dirname + '/public/favicon.png'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});