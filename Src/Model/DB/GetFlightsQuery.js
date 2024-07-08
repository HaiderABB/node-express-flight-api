// const { default: mongoose } = require('mongoose');
const Flight_Info = require('../Schemas/flight_info')

async function getFlights(query, res) {

  try {
    console.log(query);
    console.log(new Date(query.DepDate))
    const FlightsInfo = await Flight_Info.find({ departure_city: query.DepCity, arrival_city: query.ArrivalCity });
    res.json({
      message: "Flights found",
      data: FlightsInfo
    });
    // console.log(FlightsInfo);

  } catch (err) {
    console.log(err);
    res.status(500).send('bhans ki dum');

  }
}



module.exports = getFlights;

