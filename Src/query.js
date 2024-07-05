const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://haideramoazzam:k2UNQCuAX7heCh@travel-planner.le3q2ar.mongodb.net/?retryWrites=true&w=majority&appName=travel-planner'; // Replace with your MongoDB connection string
const dbName = 'travel-planner-flights'; // Replace with your database name
const collectionName = 'airline_routes'; // Replace with your collection name


const data = [
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "New York",
    "arrival_code": "JFK",
    "airline": {
      "id": "a1b4e",
      "name": "Alaska Airlines"
    }
  },
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "Los Angeles",
    "arrival_code": "LAX",
    "airline": {
      "id": "1d6b2",
      "name": "JetBlue Airways"
    }
  },
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "Chicago",
    "arrival_code": "ORD",
    "airline": {
      "id": "e8f5d",
      "name": "Spirit Airlines"
    }
  },
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "Dallas",
    "arrival_code": "DFW",
    "airline": {
      "id": "4c7ea",
      "name": "Frontier Airlines"
    }
  },
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "Atlanta",
    "arrival_code": "ATL",
    "airline": {
      "id": "b9d8f",
      "name": "Hawaiian Airlines"
    }
  },
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "San Francisco",
    "arrival_code": "SFO",
    "airline": {
      "id": "f3a2c",
      "name": "Allegiant Air"
    }
  },
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "Denver",
    "arrival_code": "DEN",
    "airline": {
      "id": "5e9a7",
      "name": "Southwest Airlines"
    }
  },
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "Phoenix",
    "arrival_code": "PHX",
    "airline": {
      "id": "a7b1e",
      "name": "Emirates"
    }
  },
  {
    "departure_city": "Miami",
    "departure_code": "MIA",
    "arrival_city": "Honolulu",
    "arrival_code": "HNL",
    "airline": {
      "id": "6b3ea",
      "name": "British Airways"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "San Francisco",
    "arrival_code": "SFO",
    "airline": {
      "id": "d1c8f",
      "name": "Lufthansa"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "Las Vegas",
    "arrival_code": "LAS",
    "airline": {
      "id": "3f7a2",
      "name": "Air France"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "New York",
    "arrival_code": "JFK",
    "airline": {
      "id": "9e5d6",
      "name": "KLM Royal Dutch Airlines"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "Chicago",
    "arrival_code": "ORD",
    "airline": {
      "id": "8a4f7",
      "name": "WestJet"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "Dallas",
    "arrival_code": "DFW",
    "airline": {
      "id": "6b9ad",
      "name": "ANA (All Nippon Airways)"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "Seattle",
    "arrival_code": "SEA",
    "airline": {
      "id": "d8f5c",
      "name": "Japan Airlines"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "Atlanta",
    "arrival_code": "ATL",
    "airline": {
      "id": "3a6e9",
      "name": "Korean Air"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "Denver",
    "arrival_code": "DEN",
    "airline": {
      "id": "7b2f1",
      "name": "Thai Airways"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "Phoenix",
    "arrival_code": "PHX",
    "airline": {
      "id": "5e1c9",
      "name": "Turkish Airlines"
    }
  },
  {
    "departure_city": "Los Angeles",
    "departure_code": "LAX",
    "arrival_city": "Honolulu",
    "arrival_code": "HNL",
    "airline": {
      "id": "e6a3b",
      "name": "Pakistan International Airlines (PIA)"
    }
  },
  {
    "departure_city": "San Francisco",
    "departure_code": "SFO",
    "arrival_city": "Seattle",
    "arrival_code": "SEA",
    "airline": {
      "id": "f9c2e",
      "name": "Wizz Air"
    }
  },
  {
    "departure_city": "San Francisco",
    "departure_code": "SFO",
    "arrival_city": "Denver",
    "arrival_code": "DEN",
    "airline": {
      "id": "f9x12",
      "name": "Serene Air"
    }
  },
  {
    "departure_city": "San Francisco",
    "departure_code": "SFO",
    "arrival_city": "Phoenix",
    "arrival_code": "PHX",
    "airline": {
      "id": "ab1f2",
      "name": "Air Blue"
    }
  }];


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



