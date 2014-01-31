'use strict';

var app = require('./app');

app.get('/', function(req, res, next) {
  req.url = '/index.html';
  next();
});

app.get('/*.html', function(req, res, next) {
  res.render('pages/' + req.params[0], {
    root: '',
    staticRoot: ''
  });
});
