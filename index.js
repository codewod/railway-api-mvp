if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // Carga .env solo en local
}

const express = require("express");
const connectDB = require("./db");
const registrosRoutes = require("./routes/registros");

const app = express();
connectDB();

app.use(express.json());
app.use("/registros", registrosRoutes);

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

app.get("/", (_req, res) => {
  res.json({
    status: "✅ API funcionando correctamente",
    ambiente: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`✅ API levantada en modo "${ENV}"`);
  console.log(`📡 Escuchando en puerto: ${PORT}`);
});
