// middleware/auth.js
require("dotenv").config();

const validarAppKeyToken = (req, res, next) => {
  const appKey = req.headers["x-app-key"];
  const appToken = req.headers["x-app-token"];

  if (appKey !== process.env.APP_KEY || appToken !== process.env.APP_TOKEN) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Invalid AppKey or Token" });
  }

  next(); // autorizado
};

module.exports = validarAppKeyToken;
