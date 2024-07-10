const mongoose = require('mongoose');
const GetFlightsDB = require('../Model/DB/GetFlightsQuery');

async function GetFlightInfo(req, res) {
  try {

    const ReqObj = {
      DepCity: req.query.DepCity,
      ArrivalCity: req.query.ArrivalCity,
      DepDate: req.query.DepDate
    }

    console.log(ReqObj);

    await GetFlightsDB(ReqObj, res);

  } catch (err) {
    console.log(err)
  }
}

module.exports = GetFlightInfo;