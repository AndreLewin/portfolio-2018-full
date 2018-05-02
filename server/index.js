const express = require('express');
const helmet = require('helmet');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser');


// Helmet for security
app.use(helmet());

// Make the content of ./public accessible from URL
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Use and configure body-parser for reading the body of HTTP requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// For debugging
app.use(function(err, req, res, next){
  console.error(err.stack);
  return res.status(err.status).json({ message: err.message });
});

// Use the webpack dev server as a middleware, so we can launch it from this file
const config = require('../webpack.dev.config');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}));


// Listen for requests
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});