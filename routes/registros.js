const express = require("express");
const router = express.Router();
const Registro = require("../schema/registro");
const validarAppKeyToken = require("../middleware/auth");

// proteger todas las rutas
router.use(validarAppKeyToken);

// POST /registros
router.post("/", async (req, res) => {
  try {
    const nuevo = new Registro(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /registros
router.get("/", async (_req, res) => {
  try {
    const registros = await Registro.find();
    res.json(registros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
