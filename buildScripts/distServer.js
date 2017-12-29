//ES6 require code
import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'

// Disable no-console linting in this file
/* eslint-disable no-console */

const port = 3000
const app = express()

// enable gzip compression (enable it in the production server)
// only used when testing locally??
app.use(compression());

app.use(express.static('dist'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
	// Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{"id": 1, "firstName":"Bob", "lastname":"Smith", "email":"bob@gmail.com"},
		{"id": 2, "firstName":"Tammy", "lastname":"Norton", "email":"tnorton@yahoo.com"},
		{"id": 3, "firstName":"Tina", "lastname":"Lee", "email":"lee.tina@hotmail.com"}
	]);
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	}
	else {
		open('http://localhost:' + port);
	}
});
