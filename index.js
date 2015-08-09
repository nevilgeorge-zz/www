// index.js

var Hapi = require('hapi'),
    pocket = require('pocket-api'),
    path = require('path'),
    _ = require('underscore');

var server = new Hapi.Server();
server.connection({
	port: 8080,
});

var consumerKey = '41481-0c222dc341ba80ec8580ba1e',
    accessToken = 'd576503d-74a4-d195-0fd1-87e4c0';

server.route({
	method: 'GET',
	path: '/hello',
	handler: function(request, reply) {
		return reply('Hello world');
	}
});

server.route({
	method: 'GET',
	path: '/{path*}',
	handler: {
		directory: {
			path: './dist',
			listing: false,
			index: true
		}
	}
});

server.route({
	method: 'GET',
	path: '/retrieve',
	config: {
		cors: true
	},
	handler: function(request, reply) {
		pocket.getArticles(consumerKey, accessToken, function(err, data) {
			if (err)
			    return reply({});
			else {
			    var values = _.values(data.list),
				result = [];
			    for (var i = 0; i < values.length; i++) {
				if (values[i].resolved_title !== '')
				   result.push(values[i]);
			    }
			    return reply(_.shuffle(result));
			}
		});
	}
});

server.route({
	method: 'GET',
	path: '/resume',
	config: {
		cors: true
	},
	handler: function(request, reply) {
		reply.file('./resume.pdf');	
	}
});

server.start(function() {
	console.log('Hapi server running at: ' + server.info.uri);
});
