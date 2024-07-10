const mongoose = require('mongoose');
const getFlights = require('../Model/DB/GetFlightsQuery');

async function GetTwoWayFlightInfo(req, res) {

  try {

    let ReqObj = {
      DepCity: req.query.DepCity,
      ArrivalCity: req.query.ArrivalCity,
      DepDate: req.query.DepDate
    }



  } catch (err) {
    console.log(err);
  }


}