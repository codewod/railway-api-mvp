const express = require("express");
const app = express();

// Cargar variables de entorno en desarrollo
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Conexión Mongo
const connectDB = require("./db");
connectDB();

// 👇 Esto va antes de usar las rutas
app.use(express.json());

// Rutas protegidas
const registrosRoutes = require("./routes/registros");
app.use("/registros", registrosRoutes);

// Endpoint raíz para monitoreo
app.get("/", (_req, res) => {
  res.json({
    status: "✅ API funcionando correctamente",
    ambiente: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

// Lanzar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `✅ API levantada en modo "${process.env.NODE_ENV || "development"}"`
  );
  console.log(`📡 Escuchando en puerto: ${PORT}`);
});
