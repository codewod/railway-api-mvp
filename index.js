require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const registrosRoutes = require("./routes/registros");

const app = express();
connectDB();

app.use(express.json());
app.use("/registros", registrosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
