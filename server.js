// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const app = express();
var compression = require('compression');

const port = process.env.PORT || 8000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets/css', express.static('assets/css'));
app.use('/assets/icons', express.static('assets/icons'));
app.use('/assets/imgs', express.static('assets/imgs'));
app.use('/assets/js', express.static('assets/js'));
app.use('/assets/sprites', express.static('assets/sprites'));

routes(app);
app.listen(port, () => {
    console.log('We are live on ' + port);
});