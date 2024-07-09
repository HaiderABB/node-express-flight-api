
// const Flight_Info = require('../Model/Schemas/flight_info')
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://haideramoazzam:k2UNQCuAX7heCh@travel-planner.le3q2ar.mongodb.net/?retryWrites=true&w=majority&appName=travel-planner'
const dbname = 'travel-planner-flights';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

const Flight = [
  {
    "departure_city": "Boston",
    "departure_code": "BOS",
    "arrival_city": "San Francisco",
    "arrival_code": "SFO",
    "airline": {
      "id": "1a2b3",
      "name": "American Airlines"
    },
    "flight_id": "AA111",
    "departure_date": "2024-09-01T00:00:00.000+00:00"
  },
  {
    "departure_city": "Houston",
    "departure_code": "IAH",
    "arrival_city": "New York",
    "arrival_code": "JFK",
    "airline": {
      "id": "2b3c4",
      "name": "Delta Air Lines"
    },
    "flight_id": "DL222",
    "departure_date": "2024-09-02T00:00:00.000+00:00"
  }]




async function InsertIntoDB() {

  try {

    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection('flight_infos')

    const tempFlights = [];
    for (const i of Flight) {
      const newDate = new Date(i.departure_date);
      tempFlights.push({ ...i, departure_date: newDate })
    }

    for (const i of tempFlights) {
      await collection.insertMany(tempFlights);
    }

    console.log('Flights inserted')

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }

}

InsertIntoDB();