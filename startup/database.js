const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');

module.exports = function(){
    const url = config.get('db');
    mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => winston.info(`Connected to ${url}...`));
}
