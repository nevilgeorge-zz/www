// server.js - node server to host www project

var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/dist'));
app.set('port', process.env.PORT || 7000);

app.get('/', function(req, res) {
	res.sendfile('index.html', {root: __dirname + '/dist'});
});

app.listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port'));
});
