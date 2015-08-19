require('node-jsx').install();

var express = require('express'),
	app = expresS(),
	React = require('react/addons'),
	components = require('./public/component.jsx');

var HelloMessage = React.createFactory(components.HelloMessage);

app.engine('jade', require('jade')._express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.render('index', {
		react: React.renderToString(HelloMessage({name: 'Moon'}))
	});
});

app.listen(3333, function (){
	console.log('Listening on port 3333');
});

