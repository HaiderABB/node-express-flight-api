const Flight_Info = require('../Schemas/flight_info')

async function getFlights(query, res) {

  const DepartureDate = new Date(query.DepDate);
  const StartOfDay = DepartureDate.setHours(0, 0, 0, 0);
  const EndOfDay = DepartureDate.setHours(23, 59, 59, 999);
  console.log(StartOfDay);
  console.log(EndOfDay);

  try {
    const FlightsInfo = await Flight_Info.find({
      departure_city: query.DepCity, arrival_city: query.ArrivalCity, departure_date: {
        $gte: StartOfDay,
        $lt: EndOfDay
      }
    });


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

