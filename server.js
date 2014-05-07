var express = require('express'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose'),
  app = exports.app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

mongoose.connect('mongodb://localhost/qdata');

require('./controllers/home').controller(app);

http.createServer(app).listen(app.get('port'), function() {
  return console.log('Express server listening on port ' + app.get('port'));
});

