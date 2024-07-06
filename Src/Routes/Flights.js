const express = require('express');
const FlightsRouter = express.Router();
const GetFlightInfo = require('../Controllers/GetFlightInfo');

FlightsRouter.get('/FlightInfo', GetFlightInfo);

module.exports = FlightsRouter;
