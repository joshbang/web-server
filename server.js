var express = require('express');

var port = 3000;
var app = express();

var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('Private route hit!');
    next();
  },
  logger: function(req, res, next) {
    console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();

  }
}
app.use(middleware.logger);
// app.use(middleware.requireAuthentication); //midleware goes above everything else

app.use(express.static(__dirname + '/public'));


app.get('/about', middleware.requireAuthentication, function(req, res) { //middleware goes in as the second argument
  res.send('About us!')
})

app.listen(port, function() {
  console.log('App running on port ' + port);
});
