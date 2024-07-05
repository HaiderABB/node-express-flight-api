const express = require('express');
const app = express();
const PORT = require('./Utils/port')
const ServerOk = require('./Utils/ServerOk')

app.listen(PORT, ServerOk(PORT));