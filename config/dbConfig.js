const dbUrl = process.env.DB_URI || `mongodb://localhost:27017/bookmarkDB`
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