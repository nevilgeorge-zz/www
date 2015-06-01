var request = require('request');
var params = {
    	consumer_key: '41481-0c222dc341ba80ec8580ba1e',
    	access_token: 'd576503d-74a4-d195-0fd1-87e4c0'
};
request({url: 'https://getpocket.com/v3/get', qs: params}, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
});

