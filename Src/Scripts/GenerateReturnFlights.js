
const InsertFlightDB = require('./InsertFlightDB');

const Data = [{
  "_id": {
    "$oid": "668baaf67dc65065b7839f0b"
  },
  "departure_city": "Frankfurt",
  "departure_code": "FRA",
  "arrival_city": "Philadelphia",
  "arrival_code": "PHL",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH402",
  "departure_date": {
    "$date": "2024-08-15T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf77dc65065b7839f0c"
  },
  "departure_city": "Sydney",
  "departure_code": "SYD",
  "arrival_city": "Austin",
  "arrival_code": "AUS",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ303",
  "departure_date": {
    "$date": "2024-08-16T20:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf77dc65065b7839f0d"
  },
  "departure_city": "Amsterdam",
  "departure_code": "AMS",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "9e5d6",
    "name": "KLM Royal Dutch Airlines"
  },
  "flight_id": "KL864",
  "departure_date": {
    "$date": "2024-08-17T22:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf77dc65065b7839f0e"
  },
  "departure_city": "Rome",
  "departure_code": "FCO",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "3f7a2",
    "name": "Air France"
  },
  "flight_id": "AF231",
  "departure_date": {
    "$date": "2024-08-18T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf77dc65065b7839f0f"
  },
  "departure_city": "Madrid",
  "departure_code": "MAD",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "3f7a2",
    "name": "Air France"
  },
  "flight_id": "AF101",
  "departure_date": {
    "$date": "2024-08-19T12:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf77dc65065b7839f11"
  },
  "departure_city": "Istanbul",
  "departure_code": "IST",
  "arrival_city": "Toronto",
  "arrival_code": "YYZ",
  "airline": {
    "id": "5e1c9",
    "name": "Turkish Airlines"
  },
  "flight_id": "TK205",
  "departure_date": {
    "$date": "2024-08-21T16:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf87dc65065b7839f12"
  },
  "departure_city": "Tokyo",
  "departure_code": "HND",
  "arrival_city": "Vancouver",
  "arrival_code": "YVR",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH206",
  "departure_date": {
    "$date": "2024-08-22T18:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf87dc65065b7839f13"
  },
  "departure_city": "Frankfurt",
  "departure_code": "FRA",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH407",
  "departure_date": {
    "$date": "2024-08-23T20:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf87dc65065b7839f14"
  },
  "departure_city": "Madrid",
  "departure_code": "MAD",
  "arrival_city": "Amsterdam",
  "arrival_code": "AMS",
  "airline": {
    "id": "3f7a2",
    "name": "Air France"
  },
  "flight_id": "AF208",
  "departure_date": {
    "$date": "2024-08-24T22:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf87dc65065b7839f15"
  },
  "departure_city": "Beijing",
  "departure_code": "PEK",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "5e1c9",
    "name": "Turkish Airlines"
  },
  "flight_id": "TK209",
  "departure_date": {
    "$date": "2024-08-25T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf87dc65065b7839f16"
  },
  "departure_city": "Istanbul",
  "departure_code": "IST",
  "arrival_city": "Madrid",
  "arrival_code": "MAD",
  "airline": {
    "id": "5e1c9",
    "name": "Turkish Airlines"
  },
  "flight_id": "TK210",
  "departure_date": {
    "$date": "2024-08-26T12:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf87dc65065b7839f17"
  },
  "departure_city": "Tokyo",
  "departure_code": "HND",
  "arrival_city": "Beijing",
  "arrival_code": "PEK",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH211",
  "departure_date": {
    "$date": "2024-08-27T14:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf87dc65065b7839f19"
  },
  "departure_city": "London",
  "departure_code": "LHR",
  "arrival_city": "Los Angeles",
  "arrival_code": "LAX",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA213",
  "departure_date": {
    "$date": "2024-08-29T18:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf97dc65065b7839f1a"
  },
  "departure_city": "Tokyo",
  "departure_code": "HND",
  "arrival_city": "Chicago",
  "arrival_code": "ORD",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH214",
  "departure_date": {
    "$date": "2024-08-30T20:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf97dc65065b7839f1b"
  },
  "departure_city": "Paris",
  "departure_code": "CDG",
  "arrival_city": "Miami",
  "arrival_code": "MIA",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR215",
  "departure_date": {
    "$date": "2024-09-01T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf97dc65065b7839f1c"
  },
  "departure_city": "Frankfurt",
  "departure_code": "FRA",
  "arrival_city": "Atlanta",
  "arrival_code": "ATL",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH216",
  "departure_date": {
    "$date": "2024-09-02T12:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf97dc65065b7839f1d"
  },
  "departure_city": "Sydney",
  "departure_code": "SYD",
  "arrival_city": "San Francisco",
  "arrival_code": "SFO",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ217",
  "departure_date": {
    "$date": "2024-09-03T14:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf97dc65065b7839f1e"
  },
  "departure_city": "Tokyo",
  "departure_code": "HND",
  "arrival_city": "Denver",
  "arrival_code": "DEN",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH218",
  "departure_date": {
    "$date": "2024-09-04T16:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaf97dc65065b7839f1f"
  },
  "departure_city": "London",
  "departure_code": "LHR",
  "arrival_city": "Seattle",
  "arrival_code": "SEA",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA219",
  "departure_date": {
    "$date": "2024-09-05T18:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafa7dc65065b7839f21"
  },
  "departure_city": "Paris",
  "departure_code": "CDG",
  "arrival_city": "Honolulu",
  "arrival_code": "HNL",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR221",
  "departure_date": {
    "$date": "2024-09-07T22:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafa7dc65065b7839f22"
  },
  "departure_city": "Frankfurt",
  "departure_code": "FRA",
  "arrival_city": "Boston",
  "arrival_code": "BOS",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH222",
  "departure_date": {
    "$date": "2024-09-08T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafa7dc65065b7839f24"
  },
  "departure_city": "Paris",
  "departure_code": "CDG",
  "arrival_city": "Dallas",
  "arrival_code": "DFW",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR102",
  "departure_date": {
    "$date": "2024-07-16T14:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafb7dc65065b7839f25"
  },
  "departure_city": "Frankfurt",
  "departure_code": "FRA",
  "arrival_city": "Miami",
  "arrival_code": "MIA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH103",
  "departure_date": {
    "$date": "2024-07-17T16:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafb7dc65065b7839f26"
  },
  "departure_city": "Sydney",
  "departure_code": "SYD",
  "arrival_city": "Atlanta",
  "arrival_code": "ATL",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ104",
  "departure_date": {
    "$date": "2024-07-18T19:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafb7dc65065b7839f27"
  },
  "departure_city": "Tokyo",
  "departure_code": "HND",
  "arrival_city": "San Francisco",
  "arrival_code": "SFO",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH105",
  "departure_date": {
    "$date": "2024-07-19T21:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafb7dc65065b7839f28"
  },
  "departure_city": "London",
  "departure_code": "LHR",
  "arrival_city": "Denver",
  "arrival_code": "DEN",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA106",
  "departure_date": {
    "$date": "2024-07-20T23:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafb7dc65065b7839f2a"
  },
  "departure_city": "Paris",
  "departure_code": "CDG",
  "arrival_city": "Phoenix",
  "arrival_code": "PHX",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR108",
  "departure_date": {
    "$date": "2024-07-22T05:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafb7dc65065b7839f2b"
  },
  "departure_city": "Frankfurt",
  "departure_code": "FRA",
  "arrival_city": "Honolulu",
  "arrival_code": "HNL",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH109",
  "departure_date": {
    "$date": "2024-07-23T07:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafb7dc65065b7839f2c"
  },
  "departure_city": "Sydney",
  "departure_code": "SYD",
  "arrival_city": "Boston",
  "arrival_code": "BOS",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ110",
  "departure_date": {
    "$date": "2024-07-24T09:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafc7dc65065b7839f2d"
  },
  "departure_city": "Tokyo",
  "departure_code": "HND",
  "arrival_city": "Orlando",
  "arrival_code": "MCO",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH111",
  "departure_date": {
    "$date": "2024-07-25T11:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafc7dc65065b7839f2e"
  },
  "departure_city": "London",
  "departure_code": "LHR",
  "arrival_city": "Washington, D.C.",
  "arrival_code": "IAD",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA112",
  "departure_date": {
    "$date": "2024-07-26T14:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafc7dc65065b7839f30"
  },
  "departure_city": "Paris",
  "departure_code": "CDG",
  "arrival_city": "San Diego",
  "arrival_code": "SAN",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR114",
  "departure_date": {
    "$date": "2024-07-28T18:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafc7dc65065b7839f32"
  },
  "departure_city": "Paris",
  "departure_code": "CDG",
  "arrival_city": "Dallas",
  "arrival_code": "DFW",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR116",
  "departure_date": {
    "$date": "2024-07-30T14:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafc7dc65065b7839f33"
  },
  "departure_city": "Frankfurt",
  "departure_code": "FRA",
  "arrival_city": "Miami",
  "arrival_code": "MIA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH117",
  "departure_date": {
    "$date": "2024-07-31T16:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafd7dc65065b7839f34"
  },
  "departure_city": "Sydney",
  "departure_code": "SYD",
  "arrival_city": "Atlanta",
  "arrival_code": "ATL",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ118",
  "departure_date": {
    "$date": "2024-08-01T19:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafd7dc65065b7839f35"
  },
  "departure_city": "Tokyo",
  "departure_code": "HND",
  "arrival_city": "San Francisco",
  "arrival_code": "SFO",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH119",
  "departure_date": {
    "$date": "2024-08-02T21:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafd7dc65065b7839f36"
  },
  "departure_city": "London",
  "departure_code": "LHR",
  "arrival_city": "Denver",
  "arrival_code": "DEN",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA120",
  "departure_date": {
    "$date": "2024-08-03T23:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafd7dc65065b7839f38"
  },
  "departure_city": "Paris",
  "departure_code": "CDG",
  "arrival_city": "Phoenix",
  "arrival_code": "PHX",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR122",
  "departure_date": {
    "$date": "2024-08-05T05:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafd7dc65065b7839f39"
  },
  "departure_city": "Frankfurt",
  "departure_code": "FRA",
  "arrival_city": "Honolulu",
  "arrival_code": "HNL",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH123",
  "departure_date": {
    "$date": "2024-08-06T07:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafd7dc65065b7839f3a"
  },
  "departure_city": "Sydney",
  "departure_code": "SYD",
  "arrival_city": "Boston",
  "arrival_code": "BOS",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ124",
  "departure_date": {
    "$date": "2024-08-07T09:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafe7dc65065b7839f3b"
  },
  "departure_city": "Tokyo",
  "departure_code": "HND",
  "arrival_city": "Orlando",
  "arrival_code": "MCO",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH125",
  "departure_date": {
    "$date": "2024-08-08T11:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafe7dc65065b7839f3c"
  },
  "departure_city": "London",
  "departure_code": "LHR",
  "arrival_city": "Washington, D.C.",
  "arrival_code": "IAD",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA126",
  "departure_date": {
    "$date": "2024-08-09T14:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafe7dc65065b7839f3e"
  },
  "departure_city": "Paris",
  "departure_code": "CDG",
  "arrival_city": "San Diego",
  "arrival_code": "SAN",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR128",
  "departure_date": {
    "$date": "2024-08-11T18:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafe7dc65065b7839f40"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR002",
  "departure_date": {
    "$date": "2024-07-14T14:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafe7dc65065b7839f41"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH003",
  "departure_date": {
    "$date": "2024-07-15T16:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baafe7dc65065b7839f42"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ004",
  "departure_date": {
    "$date": "2024-07-16T19:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaff7dc65065b7839f43"
  },
  "departure_city": "San Francisco",
  "departure_code": "SFO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH005",
  "departure_date": {
    "$date": "2024-07-17T21:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaff7dc65065b7839f44"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA006",
  "departure_date": {
    "$date": "2024-07-18T23:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaff7dc65065b7839f46"
  },
  "departure_city": "Phoenix",
  "departure_code": "PHX",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR008",
  "departure_date": {
    "$date": "2024-07-20T05:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaff7dc65065b7839f47"
  },
  "departure_city": "Honolulu",
  "departure_code": "HNL",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH009",
  "departure_date": {
    "$date": "2024-07-21T07:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaff7dc65065b7839f48"
  },
  "departure_city": "Boston",
  "departure_code": "BOS",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ010",
  "departure_date": {
    "$date": "2024-07-22T09:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668baaff7dc65065b7839f49"
  },
  "departure_city": "Orlando",
  "departure_code": "MCO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH011",
  "departure_date": {
    "$date": "2024-07-23T11:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab007dc65065b7839f4a"
  },
  "departure_city": "Washington, D.C.",
  "departure_code": "IAD",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA012",
  "departure_date": {
    "$date": "2024-07-24T14:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab007dc65065b7839f4c"
  },
  "departure_city": "San Diego",
  "departure_code": "SAN",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR014",
  "departure_date": {
    "$date": "2024-07-26T18:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab007dc65065b7839f4e"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR016",
  "departure_date": {
    "$date": "2024-08-02T14:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab007dc65065b7839f4f"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH017",
  "departure_date": {
    "$date": "2024-08-03T16:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab007dc65065b7839f50"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ018",
  "departure_date": {
    "$date": "2024-08-04T19:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab017dc65065b7839f51"
  },
  "departure_city": "San Francisco",
  "departure_code": "SFO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH019",
  "departure_date": {
    "$date": "2024-08-05T21:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab017dc65065b7839f52"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA020",
  "departure_date": {
    "$date": "2024-08-06T23:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab017dc65065b7839f54"
  },
  "departure_city": "Phoenix",
  "departure_code": "PHX",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR022",
  "departure_date": {
    "$date": "2024-08-08T05:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab017dc65065b7839f55"
  },
  "departure_city": "Honolulu",
  "departure_code": "HNL",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH023",
  "departure_date": {
    "$date": "2024-08-09T07:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab017dc65065b7839f56"
  },
  "departure_city": "Boston",
  "departure_code": "BOS",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ024",
  "departure_date": {
    "$date": "2024-08-10T09:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab017dc65065b7839f57"
  },
  "departure_city": "Orlando",
  "departure_code": "MCO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH025",
  "departure_date": {
    "$date": "2024-08-11T11:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab017dc65065b7839f58"
  },
  "departure_city": "Washington, D.C.",
  "departure_code": "IAD",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA026",
  "departure_date": {
    "$date": "2024-08-12T14:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab027dc65065b7839f5a"
  },
  "departure_city": "San Diego",
  "departure_code": "SAN",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR028",
  "departure_date": {
    "$date": "2024-08-14T18:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab027dc65065b7839f5c"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR030",
  "departure_date": {
    "$date": "2024-08-21T14:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab027dc65065b7839f5d"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH031",
  "departure_date": {
    "$date": "2024-08-22T16:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab027dc65065b7839f5e"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ032",
  "departure_date": {
    "$date": "2024-08-23T19:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab027dc65065b7839f5f"
  },
  "departure_city": "San Francisco",
  "departure_code": "SFO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH033",
  "departure_date": {
    "$date": "2024-08-24T21:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab027dc65065b7839f60"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA034",
  "departure_date": {
    "$date": "2024-08-25T23:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab037dc65065b7839f62"
  },
  "departure_city": "Phoenix",
  "departure_code": "PHX",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR036",
  "departure_date": {
    "$date": "2024-08-27T05:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab037dc65065b7839f63"
  },
  "departure_city": "Honolulu",
  "departure_code": "HNL",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH037",
  "departure_date": {
    "$date": "2024-08-28T07:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab037dc65065b7839f64"
  },
  "departure_city": "Boston",
  "departure_code": "BOS",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ038",
  "departure_date": {
    "$date": "2024-08-29T09:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab037dc65065b7839f65"
  },
  "departure_city": "Orlando",
  "departure_code": "MCO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH039",
  "departure_date": {
    "$date": "2024-08-30T11:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab037dc65065b7839f66"
  },
  "departure_city": "Washington, D.C.",
  "departure_code": "IAD",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA040",
  "departure_date": {
    "$date": "2024-08-31T14:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab047dc65065b7839f68"
  },
  "departure_city": "San Diego",
  "departure_code": "SAN",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR042",
  "departure_date": {
    "$date": "2024-09-02T18:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab047dc65065b7839f6a"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR044",
  "departure_date": {
    "$date": "2024-09-04T14:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab047dc65065b7839f6b"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH045",
  "departure_date": {
    "$date": "2024-09-05T16:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab047dc65065b7839f6c"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ046",
  "departure_date": {
    "$date": "2024-09-06T19:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab047dc65065b7839f6d"
  },
  "departure_city": "San Francisco",
  "departure_code": "SFO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH047",
  "departure_date": {
    "$date": "2024-09-07T21:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab047dc65065b7839f6e"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA048",
  "departure_date": {
    "$date": "2024-09-08T23:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab057dc65065b7839f70"
  },
  "departure_city": "Phoenix",
  "departure_code": "PHX",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR050",
  "departure_date": {
    "$date": "2024-09-10T05:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab057dc65065b7839f71"
  },
  "departure_city": "Honolulu",
  "departure_code": "HNL",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH051",
  "departure_date": {
    "$date": "2024-09-11T07:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab057dc65065b7839f72"
  },
  "departure_city": "Boston",
  "departure_code": "BOS",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ052",
  "departure_date": {
    "$date": "2024-09-12T09:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab057dc65065b7839f73"
  },
  "departure_city": "Orlando",
  "departure_code": "MCO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH053",
  "departure_date": {
    "$date": "2024-09-13T11:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab067dc65065b7839f74"
  },
  "departure_city": "Washington, D.C.",
  "departure_code": "IAD",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA054",
  "departure_date": {
    "$date": "2024-09-14T14:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab067dc65065b7839f76"
  },
  "departure_city": "San Diego",
  "departure_code": "SAN",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR056",
  "departure_date": {
    "$date": "2024-09-16T18:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab067dc65065b7839f78"
  },
  "departure_city": "Los Angeles",
  "departure_code": "LAX",
  "arrival_city": "Chicago",
  "arrival_code": "ORD",
  "airline": {
    "id": "92c1a",
    "name": "Delta Air Lines"
  },
  "flight_id": "DL002",
  "departure_date": {
    "$date": "2024-06-01T14:20:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab067dc65065b7839f79"
  },
  "departure_city": "Chicago",
  "departure_code": "ORD",
  "arrival_city": "Dallas",
  "arrival_code": "DFW",
  "airline": {
    "id": "7f2d8",
    "name": "United Airlines"
  },
  "flight_id": "UA003",
  "departure_date": {
    "$date": "2024-06-02T08:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab077dc65065b7839f7a"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Miami",
  "arrival_code": "MIA",
  "airline": {
    "id": "5e9a7",
    "name": "Southwest Airlines"
  },
  "flight_id": "SW004",
  "departure_date": {
    "$date": "2024-06-03T16:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab077dc65065b7839f7b"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "Atlanta",
  "arrival_code": "ATL",
  "airline": {
    "id": "a1b4e",
    "name": "Alaska Airlines"
  },
  "flight_id": "AS005",
  "departure_date": {
    "$date": "2024-06-04T09:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab077dc65065b7839f7c"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "San Francisco",
  "arrival_code": "SFO",
  "airline": {
    "id": "1d6b2",
    "name": "JetBlue Airways"
  },
  "flight_id": "JB006",
  "departure_date": {
    "$date": "2024-06-05T13:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab077dc65065b7839f7d"
  },
  "departure_city": "San Francisco",
  "departure_code": "SFO",
  "arrival_city": "Denver",
  "arrival_code": "DEN",
  "airline": {
    "id": "e8f5d",
    "name": "Spirit Airlines"
  },
  "flight_id": "NK007",
  "departure_date": {
    "$date": "2024-06-06T11:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab077dc65065b7839f7e"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "Seattle",
  "arrival_code": "SEA",
  "airline": {
    "id": "4c7ea",
    "name": "Frontier Airlines"
  },
  "flight_id": "F9008",
  "departure_date": {
    "$date": "2024-06-07T15:25:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab087dc65065b7839f7f"
  },
  "departure_city": "Seattle",
  "departure_code": "SEA",
  "arrival_city": "Phoenix",
  "arrival_code": "PHX",
  "airline": {
    "id": "b9d8f",
    "name": "Hawaiian Airlines"
  },
  "flight_id": "HA009",
  "departure_date": {
    "$date": "2024-06-08T17:40:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab087dc65065b7839f81"
  },
  "departure_city": "New York",
  "departure_code": "JFK",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA011",
  "departure_date": {
    "$date": "2024-06-10T21:10:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab087dc65065b7839f82"
  },
  "departure_city": "Los Angeles",
  "departure_code": "LAX",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH012",
  "departure_date": {
    "$date": "2024-06-11T23:25:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab097dc65065b7839f84"
  },
  "departure_city": "Los Angeles",
  "departure_code": "LAX",
  "arrival_city": "Chicago",
  "arrival_code": "ORD",
  "airline": {
    "id": "92c1a",
    "name": "Delta Air Lines"
  },
  "flight_id": "DL002",
  "departure_date": {
    "$date": "2024-06-01T14:20:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab097dc65065b7839f85"
  },
  "departure_city": "Chicago",
  "departure_code": "ORD",
  "arrival_city": "Dallas",
  "arrival_code": "DFW",
  "airline": {
    "id": "7f2d8",
    "name": "United Airlines"
  },
  "flight_id": "UA003",
  "departure_date": {
    "$date": "2024-06-02T08:30:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab097dc65065b7839f86"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Miami",
  "arrival_code": "MIA",
  "airline": {
    "id": "5e9a7",
    "name": "Southwest Airlines"
  },
  "flight_id": "SW004",
  "departure_date": {
    "$date": "2024-06-03T16:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab097dc65065b7839f87"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "Atlanta",
  "arrival_code": "ATL",
  "airline": {
    "id": "a1b4e",
    "name": "Alaska Airlines"
  },
  "flight_id": "AS005",
  "departure_date": {
    "$date": "2024-06-04T09:15:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab097dc65065b7839f88"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "San Francisco",
  "arrival_code": "SFO",
  "airline": {
    "id": "1d6b2",
    "name": "JetBlue Airways"
  },
  "flight_id": "JB006",
  "departure_date": {
    "$date": "2024-06-05T13:45:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab0a7dc65065b7839f89"
  },
  "departure_city": "San Francisco",
  "departure_code": "SFO",
  "arrival_city": "Denver",
  "arrival_code": "DEN",
  "airline": {
    "id": "e8f5d",
    "name": "Spirit Airlines"
  },
  "flight_id": "NK007",
  "departure_date": {
    "$date": "2024-06-06T11:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab0a7dc65065b7839f8a"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "Seattle",
  "arrival_code": "SEA",
  "airline": {
    "id": "4c7ea",
    "name": "Frontier Airlines"
  },
  "flight_id": "F9008",
  "departure_date": {
    "$date": "2024-06-07T15:25:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab0a7dc65065b7839f8b"
  },
  "departure_city": "Seattle",
  "departure_code": "SEA",
  "arrival_city": "Phoenix",
  "arrival_code": "PHX",
  "airline": {
    "id": "b9d8f",
    "name": "Hawaiian Airlines"
  },
  "flight_id": "HA009",
  "departure_date": {
    "$date": "2024-06-08T17:40:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab0a7dc65065b7839f8c"
  },
  "departure_city": "Phoenix",
  "departure_code": "PHX",
  "arrival_city": "Honolulu",
  "arrival_code": "HNL",
  "airline": {
    "id": "f3a2c",
    "name": "Allegiant Air"
  },
  "flight_id": "G40010",
  "departure_date": {
    "$date": "2024-06-09T19:55:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab0b7dc65065b7839f8d"
  },
  "departure_city": "New York",
  "departure_code": "JFK",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA011",
  "departure_date": {
    "$date": "2024-06-10T21:10:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668bab0b7dc65065b7839f8e"
  },
  "departure_city": "Los Angeles",
  "departure_code": "LAX",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH012",
  "departure_date": {
    "$date": "2024-06-11T23:25:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b989"
  },
  "departure_city": "New York",
  "departure_code": "JFK",
  "arrival_city": "Los Angeles",
  "arrival_code": "LAX",
  "airline": {
    "id": "3bfc5",
    "name": "American Airlines"
  },
  "flight_id": "AA123",
  "departure_date": {
    "$date": "2024-08-15T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b98a"
  },
  "departure_city": "Los Angeles",
  "departure_code": "LAX",
  "arrival_city": "Chicago",
  "arrival_code": "ORD",
  "airline": {
    "id": "92c1a",
    "name": "Delta Air Lines"
  },
  "flight_id": "DL456",
  "departure_date": {
    "$date": "2024-08-16T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b98b"
  },
  "departure_city": "Chicago",
  "departure_code": "ORD",
  "arrival_city": "Dallas",
  "arrival_code": "DFW",
  "airline": {
    "id": "7f2d8",
    "name": "United Airlines"
  },
  "flight_id": "UA789",
  "departure_date": {
    "$date": "2024-08-17T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b98c"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Miami",
  "arrival_code": "MIA",
  "airline": {
    "id": "5e9a7",
    "name": "Southwest Airlines"
  },
  "flight_id": "WN101",
  "departure_date": {
    "$date": "2024-08-18T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b98d"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "Atlanta",
  "arrival_code": "ATL",
  "airline": {
    "id": "a1b4e",
    "name": "Alaska Airlines"
  },
  "flight_id": "AS234",
  "departure_date": {
    "$date": "2024-08-19T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b98e"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "San Francisco",
  "arrival_code": "SFO",
  "airline": {
    "id": "1d6b2",
    "name": "JetBlue Airways"
  },
  "flight_id": "B615",
  "departure_date": {
    "$date": "2024-08-20T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b98f"
  },
  "departure_city": "San Francisco",
  "departure_code": "SFO",
  "arrival_city": "Denver",
  "arrival_code": "DEN",
  "airline": {
    "id": "e8f5d",
    "name": "Spirit Airlines"
  },
  "flight_id": "NK789",
  "departure_date": {
    "$date": "2024-08-21T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b990"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "Seattle",
  "arrival_code": "SEA",
  "airline": {
    "id": "4c7ea",
    "name": "Frontier Airlines"
  },
  "flight_id": "F912",
  "departure_date": {
    "$date": "2024-08-22T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b991"
  },
  "departure_city": "Seattle",
  "departure_code": "SEA",
  "arrival_city": "Phoenix",
  "arrival_code": "PHX",
  "airline": {
    "id": "b9d8f",
    "name": "Hawaiian Airlines"
  },
  "flight_id": "HA457",
  "departure_date": {
    "$date": "2024-08-23T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b992"
  },
  "departure_city": "Phoenix",
  "departure_code": "PHX",
  "arrival_city": "Honolulu",
  "arrival_code": "HNL",
  "airline": {
    "id": "f3a2c",
    "name": "Allegiant Air"
  },
  "flight_id": "G678",
  "departure_date": {
    "$date": "2024-08-24T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b993"
  },
  "departure_city": "New York",
  "departure_code": "JFK",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA234",
  "departure_date": {
    "$date": "2024-08-25T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b994"
  },
  "departure_city": "Los Angeles",
  "departure_code": "LAX",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH456",
  "departure_date": {
    "$date": "2024-08-26T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b995"
  },
  "departure_city": "Chicago",
  "departure_code": "ORD",
  "arrival_city": "Dubai",
  "arrival_code": "DXB",
  "airline": {
    "id": "a7b1e",
    "name": "Emirates"
  },
  "flight_id": "EK789",
  "departure_date": {
    "$date": "2024-08-27T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b996"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR123",
  "departure_date": {
    "$date": "2024-08-28T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b997"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "Frankfurt",
  "arrival_code": "FRA",
  "airline": {
    "id": "d1c8f",
    "name": "Lufthansa"
  },
  "flight_id": "LH456",
  "departure_date": {
    "$date": "2024-08-29T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b998"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "Sydney",
  "arrival_code": "SYD",
  "airline": {
    "id": "b9a8e",
    "name": "Singapore Airlines"
  },
  "flight_id": "SQ789",
  "departure_date": {
    "$date": "2024-08-30T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b999"
  },
  "departure_city": "San Francisco",
  "departure_code": "SFO",
  "arrival_city": "Tokyo",
  "arrival_code": "HND",
  "airline": {
    "id": "6b9ad",
    "name": "ANA (All Nippon Airways)"
  },
  "flight_id": "NH567",
  "departure_date": {
    "$date": "2024-08-31T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b99a"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "London",
  "arrival_code": "LHR",
  "airline": {
    "id": "6b3ea",
    "name": "British Airways"
  },
  "flight_id": "BA789",
  "departure_date": {
    "$date": "2024-09-01T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b99b"
  },
  "departure_city": "Seattle",
  "departure_code": "SEA",
  "arrival_city": "Dubai",
  "arrival_code": "DXB",
  "airline": {
    "id": "a7b1e",
    "name": "Emirates"
  },
  "flight_id": "EK567",
  "departure_date": {
    "$date": "2024-09-02T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d38193e53b902d8c3b99c"
  },
  "departure_city": "Phoenix",
  "departure_code": "PHX",
  "arrival_city": "Paris",
  "arrival_code": "CDG",
  "airline": {
    "id": "5c8f3",
    "name": "Qatar Airways"
  },
  "flight_id": "QR456",
  "departure_date": {
    "$date": "2024-09-03T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668d3d82d9ce3ba684866f8c"
  },
  "departure_city": "Boston",
  "departure_code": "BOS",
  "arrival_city": "San Francisco",
  "arrival_code": "SFO",
  "airline": {
    "id": "1a2b3",
    "name": "American Airlines"
  },
  "flight_id": "AA111",
  "departure_date": {
    "$date": "2024-09-01T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b16"
  },
  "departure_city": "Phoenix",
  "departure_code": "PHX",
  "arrival_city": "Miami",
  "arrival_code": "MIA",
  "airline": {
    "id": "3c4d5",
    "name": "United Airlines"
  },
  "flight_id": "UA333",
  "departure_date": {
    "$date": "2024-09-03T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b17"
  },
  "departure_city": "Denver",
  "departure_code": "DEN",
  "arrival_city": "Chicago",
  "arrival_code": "ORD",
  "airline": {
    "id": "4d5e6",
    "name": "Southwest Airlines"
  },
  "flight_id": "WN444",
  "departure_date": {
    "$date": "2024-09-04T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b18"
  },
  "departure_city": "Seattle",
  "departure_code": "SEA",
  "arrival_city": "Boston",
  "arrival_code": "BOS",
  "airline": {
    "id": "5e6f7",
    "name": "Alaska Airlines"
  },
  "flight_id": "AS555",
  "departure_date": {
    "$date": "2024-09-05T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b19"
  },
  "departure_city": "Orlando",
  "departure_code": "MCO",
  "arrival_city": "Las Vegas",
  "arrival_code": "LAS",
  "airline": {
    "id": "6f7g8",
    "name": "JetBlue Airways"
  },
  "flight_id": "B666",
  "departure_date": {
    "$date": "2024-09-06T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b1a"
  },
  "departure_city": "Las Vegas",
  "departure_code": "LAS",
  "arrival_city": "Seattle",
  "arrival_code": "SEA",
  "airline": {
    "id": "7g8h9",
    "name": "Spirit Airlines"
  },
  "flight_id": "NK777",
  "departure_date": {
    "$date": "2024-09-07T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b1b"
  },
  "departure_city": "Atlanta",
  "departure_code": "ATL",
  "arrival_city": "Orlando",
  "arrival_code": "MCO",
  "airline": {
    "id": "8h9i0",
    "name": "Frontier Airlines"
  },
  "flight_id": "F888",
  "departure_date": {
    "$date": "2024-09-08T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b1c"
  },
  "departure_city": "Dallas",
  "departure_code": "DFW",
  "arrival_city": "Los Angeles",
  "arrival_code": "LAX",
  "airline": {
    "id": "9i0j1",
    "name": "Hawaiian Airlines"
  },
  "flight_id": "HA999",
  "departure_date": {
    "$date": "2024-09-09T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b1f"
  },
  "departure_city": "Miami",
  "departure_code": "MIA",
  "arrival_city": "San Francisco",
  "arrival_code": "SFO",
  "airline": {
    "id": "2l3m4",
    "name": "Delta Air Lines"
  },
  "flight_id": "DL202",
  "departure_date": {
    "$date": "2024-09-12T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b21"
  },
  "departure_city": "Philadelphia",
  "departure_code": "PHL",
  "arrival_city": "Atlanta",
  "arrival_code": "ATL",
  "airline": {
    "id": "4n5o6",
    "name": "Southwest Airlines"
  },
  "flight_id": "WN404",
  "departure_date": {
    "$date": "2024-09-14T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "668e2a0282ab5a5117d35b22"
  },
  "departure_city": "Washington, D.C.",
  "departure_code": "DCA",
  "arrival_city": "Chicago",
  "arrival_code": "ORD",
  "airline": {
    "id": "5o6p7",
    "name": "Alaska Airlines"
  },
  "flight_id": "AS505",
  "departure_date": {
    "$date": "2024-09-15T00:00:00.000Z"
  }
}];


function testAlpha(flight_code) {

  let alpha = ''
  let num = ''
  for (const i in flight_code) {

    if (flight_code[i].charCodeAt() > 65 && flight_code[i].charCodeAt() < 91) {
      alpha = alpha + flight_code[i];
    }
    else {
      num = num + flight_code[i];
    }

  }
  const tempNum = Number(num) + 1;
  return alpha + tempNum;

}


const generateReturnFlights = () => {

  const tempData = [];

  for (const flight of Data) {

    const randomNumber = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
    delete flight._id;
    const tempDate = new Date(flight.departure_date.$date);
    delete flight.departure_date;
    flight.departure_date = new Date(tempDate.setDate(tempDate.getDate() + randomNumber));
    const tempCity = flight.departure_city;
    const tempCode = flight.departure_code;
    flight.departure_code = flight.arrival_code;
    flight.arrival_code = tempCode;
    flight.departure_city = flight.arrival_city;
    flight.arrival_city = tempCity;
    flight.flight_id = testAlpha(flight.flight_id)
    tempData.push(flight);

  }

  // Insert Return flights into the Database
  InsertFlightDB(tempData);

}

generateReturnFlights();
