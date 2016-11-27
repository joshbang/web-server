var express = require('express');
var middleware = require('./middleware')
var port = 3000;
var app = express();


app.use(middleware.logger);
// app.use(middleware.requireAuthentication); //midleware goes above everything else

app.use(express.static(__dirname + '/public'));


app.get('/About', middleware.requireAuthentication, function(req, res) { //middleware goes in as the second argument
  res.send('About Us!')
})

app.listen(port, function() {
  console.log('App running on port ' + port);
});
