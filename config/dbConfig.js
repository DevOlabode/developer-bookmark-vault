const dbUrl = process.env.MONGO_URI;
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl);
    console.log(`MongoDB connected Successfully`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;