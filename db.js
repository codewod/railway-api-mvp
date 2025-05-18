const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("URI desde env:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado ✅");
  } catch (error) {
    console.error("Error conectando a MongoDB ❌", error);
    process.exit(1);
  }
};

module.exports = connectDB;
