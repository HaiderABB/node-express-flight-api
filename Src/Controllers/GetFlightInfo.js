const mongoose = require('mongoose');
const getFlights = require('../Model/DB/GetFlightsQuery');

async function GetFlightInfo(req, res) {
  try {

    await getFlights(req.query, res);

  } catch (err) {
    console.log(err)
  }
}

module.exports = GetFlightInfo;