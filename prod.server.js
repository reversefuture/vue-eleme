<<<<<<< HEAD
var express = require('express')
var config = require('./config/index.js')

var port = process.env.Port || config.build.port

var app = express()
var router = express.Router()

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get('/seller', function(req, res) {
	res.json({
		errno: 0,
		seller: seller
	});
});

apiRoutes.get('/goods', function(req, res) {
	res.json({
		errno: 0,
		goods: goods
	});
});

apiRoutes.get('/ratings', function(req, res) {
	res.json({
		errno: 0,
		ratings: ratings
	});
});

router.get('', function(req, res, next) {
	req.url = '/index.html'
	next()
})

app.use(express.static('./dist'));
app.use('/api', apiRoutes);

module.exports = app.listen(port, function(err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
=======
var express = require('express')
var config = require('./config/index.js')

var port = process.env.Port || config.build.port

var app = express()
var router = express.Router()

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get('/seller', function(req, res) {
	res.json({
		errno: 0,
		seller: seller
	});
});

apiRoutes.get('/goods', function(req, res) {
	res.json({
		errno: 0,
		goods: goods
	});
});

apiRoutes.get('/ratings', function(req, res) {
	res.json({
		errno: 0,
		ratings: ratings
	});
});

router.get('', function(req, res, next) {
	req.url = '/index.html'
	next()
})

app.use(express.static('./dist'));
app.use('/api', apiRoutes);

module.exports = app.listen(port, function(err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
>>>>>>> d7e451755c1bcc4188bab6e0b0e46c268ad031ce
});