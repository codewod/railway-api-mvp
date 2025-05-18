const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Conexión Mongo
const connectDB = require("./db");
connectDB();

app.use(express.json());

const registrosRoutes = require("./routes/registros");
app.use("/registros", registrosRoutes);

app.get("/", (_req, res) => {
  res.json({
    status: "✅ API funcionando correctamente",
    ambiente: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `✅ API levantada en modo "${process.env.NODE_ENV || "development"}"`
  );
  console.log(`📡 Escuchando en puerto: ${PORT}`);
});
