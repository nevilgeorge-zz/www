// script.js
/*
var pocket = require('pocket-api');

var consumer_key = '41481-0c222dc341ba80ec8580ba1e';

pocket.getRequestToken(consumer_key, function(data) {
	console.log('Request token:');
	var request_token = data.code;
	console.log(request_token);

	pocket.getAccessToken(consumer_key, request_token, function(data) {
		console.log('Access token');
		console.log(data);
	});
});
*/

var GetPocket = require('node-getpocket');
var express = require('express');
var app = express();

app.get('/redirect', function(req, res) {
	console.log(req.body);
});

var config = {
	consumer_key: '41481-0c222dc341ba80ec8580ba1e',
	redirect_uri: 'http://localhost:8080/redirect'
};

var pocket = new GetPocket(config);

var params = {
	// redirect_uri: config.redirect_uri
	request_token: '31c178dc-2b7a-dd6e-2552-03d027'
};

/*
pocket.getRequestToken(params, function(err, resp, body) {
	if (err) {
		console.log('Error occurred ' + err);
	} else {
		var json = JSON.parse(body);
		console.log(json);
	}
});

pocket.getAccessToken(params, function(err, resp, body) {
	if (err) {
		console.log('Error occurred ' + err);
	} else {
		var json = JSON.parse(body);
		console.log(json);
	}
});
*/

var config = { "consumer_key": "41481-0c222dc341ba80ec8580ba1e", "access_token": "d576503d-74a4-d195-0fd1-87e4c0" };
var pocket = new GetPocket(config);

pocket.get({}, function(err, resp) {
	console.log(resp);
	console.log(err);
});
