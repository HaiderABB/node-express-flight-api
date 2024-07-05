const express = require('express');
const app = express();
const PORT = require('./Utils/port')
const ServerOk = require('./Utils/ServerOk')

const getFlights = require('./Routes/index')

app.get(getFlights, (req, res) => {
  res.json({ name: 'haider' });
})

app.listen(PORT, ServerOk(PORT));