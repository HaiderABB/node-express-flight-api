import mongoose from 'mongoose';
const { Schema } = mongoose;

const info_schema = {
  departure_city: String,
  departure_code: String,
  arrival_city: String,
  arrival_code: String,
  airline: {
    id: String,
    name: String
  },
  flight_id: String,
  departure_date: Date
};

const flight_info_schema = new Schema(info_schema)