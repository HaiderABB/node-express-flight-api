const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://haideramoazzam:k2UNQCuAX7heCh@travel-planner.le3q2ar.mongodb.net/?retryWrites=true&w=majority&appName=travel-planner';
const dbName = 'travel-planner-flights';
const collectionName = 'flight_info';


const data = [
  {
    "departure_city": "Frankfurt",
    "departure_code": "FRA",
    "arrival_city": "Philadelphia",
    "arrival_code": "PHL",
    "airline": {
      "id": "d1c8f",
      "name": "Lufthansa"
    },
    "flight_id": "LH402",
    "departure_date": "2024-08-15T18:00:00.000+00:00"
  },
  {
    "departure_city": "Sydney",
    "departure_code": "SYD",
    "arrival_city": "Austin",
    "arrival_code": "AUS",
    "airline": {
      "id": "b9a8e",
      "name": "Singapore Airlines"
    },
    "flight_id": "SQ303",
    "departure_date": "2024-08-16T20:30:00.000+00:00"
  },
  {
    "departure_city": "Amsterdam",
    "departure_code": "AMS",
    "arrival_city": "Tokyo",
    "arrival_code": "HND",
    "airline": {
      "id": "9e5d6",
      "name": "KLM Royal Dutch Airlines"
    },
    "flight_id": "KL864",
    "departure_date": "2024-08-17T22:45:00.000+00:00"
  },
  {
    "departure_city": "Rome",
    "departure_code": "FCO",
    "arrival_city": "London",
    "arrival_code": "LHR",
    "airline": {
      "id": "3f7a2",
      "name": "Air France"
    },
    "flight_id": "AF231",
    "departure_date": "2024-08-18T10:00:00.000+00:00"
  },
  {
    "departure_city": "Madrid",
    "departure_code": "MAD",
    "arrival_city": "Paris",
    "arrival_code": "CDG",
    "airline": {
      "id": "3f7a2",
      "name": "Air France"
    },
    "flight_id": "AF101",
    "departure_date": "2024-08-19T12:30:00.000+00:00"
  },
  {
    "departure_city": "Beijing",
    "departure_code": "PEK",
    "arrival_city": "Dubai",
    "arrival_code": "DXB",
    "airline": {
      "id": "5e1c9",
      "name": "Turkish Airlines"
    },
    "flight_id": "TK204",
    "departure_date": "2024-08-20T14:45:00.000+00:00"
  },
  {
    "departure_city": "Istanbul",
    "departure_code": "IST",
    "arrival_city": "Toronto",
    "arrival_code": "YYZ",
    "airline": {
      "id": "5e1c9",
      "name": "Turkish Airlines"
    },
    "flight_id": "TK205",
    "departure_date": "2024-08-21T16:00:00.000+00:00"
  },
  {
    "departure_city": "Tokyo",
    "departure_code": "HND",
    "arrival_city": "Vancouver",
    "arrival_code": "YVR",
    "airline": {
      "id": "6b9ad",
      "name": "ANA (All Nippon Airways)"
    },
    "flight_id": "NH206",
    "departure_date": "2024-08-22T18:15:00.000+00:00"
  },
  {
    "departure_city": "Frankfurt",
    "departure_code": "FRA",
    "arrival_city": "Sydney",
    "arrival_code": "SYD",
    "airline": {
      "id": "d1c8f",
      "name": "Lufthansa"
    },
    "flight_id": "LH407",
    "departure_date": "2024-08-23T20:30:00.000+00:00"
  },
  {
    "departure_city": "Madrid",
    "departure_code": "MAD",
    "arrival_city": "Amsterdam",
    "arrival_code": "AMS",
    "airline": {
      "id": "3f7a2",
      "name": "Air France"
    },
    "flight_id": "AF208",
    "departure_date": "2024-08-24T22:45:00.000+00:00"
  },
  {
    "departure_city": "Beijing",
    "departure_code": "PEK",
    "arrival_city": "Frankfurt",
    "arrival_code": "FRA",
    "airline": {
      "id": "5e1c9",
      "name": "Turkish Airlines"
    },
    "flight_id": "TK209",
    "departure_date": "2024-08-25T10:00:00.000+00:00"
  },
  {
    "departure_city": "Istanbul",
    "departure_code": "IST",
    "arrival_city": "Madrid",
    "arrival_code": "MAD",
    "airline": {
      "id": "5e1c9",
      "name": "Turkish Airlines"
    },
    "flight_id": "TK210",
    "departure_date": "2024-08-26T12:30:00.000+00:00"
  },
  {
    "departure_city": "Tokyo",
    "departure_code": "HND",
    "arrival_city": "Beijing",
    "arrival_code": "PEK",
    "airline": {
      "id": "6b9ad",
      "name": "ANA (All Nippon Airways)"
    },
    "flight_id": "NH211",
    "departure_date": "2024-08-27T14:45:00.000+00:00"
  },
  {
    "departure_city": "Dubai",
    "departure_code": "DXB",
    "arrival_city": "Istanbul",
    "arrival_code": "IST",
    "airline": {
      "id": "5e1c9",
      "name": "Turkish Airlines"
    },
    "flight_id": "TK212",
    "departure_date": "2024-08-28T16:00:00.000+00:00"
  },
  {
    "departure_city": "London",
    "departure_code": "LHR",
    "arrival_city": "Los Angeles",
    "arrival_code": "LAX",
    "airline": {
      "id": "6b3ea",
      "name": "British Airways"
    },
    "flight_id": "BA213",
    "departure_date": "2024-08-29T18:15:00.000+00:00"
  },
  {
    "departure_city": "Tokyo",
    "departure_code": "HND",
    "arrival_city": "Chicago",
    "arrival_code": "ORD",
    "airline": {
      "id": "6b9ad",
      "name": "ANA (All Nippon Airways)"
    },
    "flight_id": "NH214",
    "departure_date": "2024-08-30T20:30:00.000+00:00"
  },
  {
    "departure_city": "Paris",
    "departure_code": "CDG",
    "arrival_city": "Miami",
    "arrival_code": "MIA",
    "airline": {
      "id": "5c8f3",
      "name": "Qatar Airways"
    },
    "flight_id": "QR215",
    "departure_date": "2024-09-01T10:00:00.000+00:00"
  },
  {
    "departure_city": "Frankfurt",
    "departure_code": "FRA",
    "arrival_city": "Atlanta",
    "arrival_code": "ATL",
    "airline": {
      "id": "d1c8f",
      "name": "Lufthansa"
    },
    "flight_id": "LH216",
    "departure_date": "2024-09-02T12:30:00.000+00:00"
  },
  {
    "departure_city": "Sydney",
    "departure_code": "SYD",
    "arrival_city": "San Francisco",
    "arrival_code": "SFO",
    "airline": {
      "id": "b9a8e",
      "name": "Singapore Airlines"
    },
    "flight_id": "SQ217",
    "departure_date": "2024-09-03T14:45:00.000+00:00"
  },
  {
    "departure_city": "Tokyo",
    "departure_code": "HND",
    "arrival_city": "Denver",
    "arrival_code": "DEN",
    "airline": {
      "id": "6b9ad",
      "name": "ANA (All Nippon Airways)"
    },
    "flight_id": "NH218",
    "departure_date": "2024-09-04T16:00:00.000+00:00"
  },
  {
    "departure_city": "London",
    "departure_code": "LHR",
    "arrival_city": "Seattle",
    "arrival_code": "SEA",
    "airline": {
      "id": "6b3ea",
      "name": "British Airways"
    },
    "flight_id": "BA219",
    "departure_date": "2024-09-05T18:15:00.000+00:00"
  },
  {
    "departure_city": "Dubai",
    "departure_code": "DXB",
    "arrival_city": "Phoenix",
    "arrival_code": "PHX",
    "airline": {
      "id": "a7b1e",
      "name": "Emirates"
    },
    "flight_id": "EK220",
    "departure_date": "2024-09-06T20:30:00.000+00:00"
  },
  {
    "departure_city": "Paris",
    "departure_code": "CDG",
    "arrival_city": "Honolulu",
    "arrival_code": "HNL",
    "airline": {
      "id": "5c8f3",
      "name": "Qatar Airways"
    },
    "flight_id": "QR221",
    "departure_date": "2024-09-07T22:45:00.000+00:00"
  },
  {
    "departure_city": "Frankfurt",
    "departure_code": "FRA",
    "arrival_city": "Boston",
    "arrival_code": "BOS",
    "airline": {
      "id": "d1c8f",
      "name": "Lufthansa"
    },
    "flight_id": "LH222",
    "departure_date": "2024-09-08T10:00:00.000+00:00"
  }
]
  ;


async function insertDocuments() {


  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert each document into the collection
    for (let i = 0; i < data.length; i++) {
      const result = await collection.insertOne(data[i]);
      console.log(`Inserted document ${i + 1}: ${result.insertedId}`);
    }

  } catch (err) {
    console.error("Error inserting documents:", err);
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
}

// Call the function to insert documents
insertDocuments();



