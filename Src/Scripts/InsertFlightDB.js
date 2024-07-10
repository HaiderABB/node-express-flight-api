
const DBpass = require('../Config/DBpass');
console.log(DBpass);

const { MongoClient } = require('mongodb');
const url = `mongodb+srv://haideramoazzam:${DBpass}@travel-planner.le3q2ar.mongodb.net/?retryWrites=true&w=majority&appName=travel-planner`
const dbname = 'travel-planner-flights';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
async function InsertIntoDB(Flight) {

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

module.exports = InsertIntoDB;