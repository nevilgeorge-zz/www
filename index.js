// index.js

var Hapi = require('hapi'),
    pocket = require('pocket-api'),
    path = require('path'),
    _ = require('underscore');

var secrets = require('./config/secrets');

var server = new Hapi.Server();
server.connection({
	port: 8080,
});

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
		pocket.getArticles(secrets.pocketConsumerKey, secrets.pocketAccessToken, function(err, data) {
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
