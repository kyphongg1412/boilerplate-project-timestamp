let express = require('express');
let app = express();
require('dotenv').config();
 app.get("/api", (req, res) => {
  const thoigian = new Date();
  res.json({
    "unix":thoigian.getTime(),
    "utc": thoigian.toUTCString()
  });
 });


















 module.exports = app;