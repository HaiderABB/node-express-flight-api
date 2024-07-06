const express = require('express');
const FlightBooking = express();
const PORT = require('./Config/port')
const ServerOk = require('./Utils/ServerOk')
const FlightsRouter = require('./Routes/Flights')
// Routers
FlightBooking.use('/FlightBooking', FlightsRouter);


FlightBooking.listen(PORT, ServerOk(PORT));