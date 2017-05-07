const path = require('path');
const http = require('http');
const express = require('express');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
let app = express();
let server = http.createServer(app);

app.use(express.static(publicPath));

server.listen(port, () => {
	console.log(`Server is up on port ${port}`)
});
