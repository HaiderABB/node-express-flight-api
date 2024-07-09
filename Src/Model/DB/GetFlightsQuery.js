const Flight_Info = require('../Schemas/flight_info')

async function getFlights(query, res) {

  try {
    const FlightsInfo = await Flight_Info.find({ departure_city: query.DepCity, arrival_city: query.ArrivalCity });
    res.json({
      message: "Flights found",
      data: FlightsInfo
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('');

  }
}



module.exports = getFlights;

