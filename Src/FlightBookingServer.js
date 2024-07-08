const express = require('express');
const FlightBooking = express();
const PORT = require('./Config/port')
const ServerOk = require('./Utils/ServerOk')
const FlightsRouter = require('./Routes/Flights')
const MongoConnection = require('../Src/Config/FlightsDBconnection');

// Async function for handling MongoDB connection
MongoConnection();

// Routers
FlightBooking.use('/FlightBooking', FlightsRouter);


FlightBooking.listen(PORT, ServerOk(PORT));