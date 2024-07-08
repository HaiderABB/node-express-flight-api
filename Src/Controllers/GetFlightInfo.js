const mongoose = require('mongoose');
const getFlights = require('../Model/DB/GetFlightsQuery');

async function GetFlightsDB(params, res) {
  // const QueryParams = {
  //   DepCity: params.DepCity,
  //   ArrivalCity: params.ArrivalCity,
  //   DepDate: params.DepDate,
  // }

  try {
    await getFlights(params, res)
  } catch (err) {
    console.log(err)
  }
}

async function GetFlightInfo(req, res) {

  try {

    await GetFlightsDB(req.query, res);

  } catch (err) {
    console.log(err)
  }

}

module.exports = GetFlightInfo;