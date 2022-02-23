'use strict';

require('dotenv').config();

const server = require('./scr/server.js');

server.start(process.env.PORT || 3005);