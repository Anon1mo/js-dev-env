import express from 'express';
import path from 'path';
import open from 'open';
// setup webpack, import webpack and config)
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
// setup webpack, setup compiler
const compiler = webpack(config);

// use webpack middleware
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
