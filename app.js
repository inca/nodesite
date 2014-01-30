'use strict';

var express = require('express')
  , stylus = require('stylus');

var app = module.exports = exports = express();

// Configuration

app.set('port', process.env.PORT || 8123);
app.set('views', './views');
app.set('view engine', 'jade');

// Middleware

app.use(express.logger('dev'));

app.use(app.router);

app.use(stylus.middleware({
  src: './public',
  compress: true
}));

app.use(express.static('./public'));