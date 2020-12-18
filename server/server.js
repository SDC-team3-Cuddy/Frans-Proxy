const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

app.get('/loaderio-96de71fcf2e638db6194fc0d16fd5d3f.txt', function(req, res){
  res.sendFile(__dirname + '//loaderio-96de71fcf2e638db6194fc0d16fd5d3f.txt');
});

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

module.exports = app;
