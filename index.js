const express = require('express');
const winston = require('winston');
const app = express();

require('./startup/routes')(app);
require('./startup/database')();
require('./startup/logging')(winston);
require('./startup/config')();
require('./startup/validation')();

/* HomePage */
app.get('/', (req, res) => {
    let message = "Welcome to my humble website";
    res.send(message);
});
//PORT
const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;