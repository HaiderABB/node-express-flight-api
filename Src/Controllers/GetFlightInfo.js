const express = require('express');

const ReqParam = {

};

async function GetFlightInfo(req, res) {

  const { DepCity, ArrivalCity, DepDate, ArrivalDate, CabinClass } = req.query;

  res.json({ Departure_City: DepCity, Arrival_City: ArrivalCity, Departure_Date: DepDate, Arrival_Date: ArrivalDate, Cabin_Class: CabinClass });



}

module.exports = GetFlightInfo;