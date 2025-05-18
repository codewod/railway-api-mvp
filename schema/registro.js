const mongoose = require("mongoose");

const registroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Registro", registroSchema);
