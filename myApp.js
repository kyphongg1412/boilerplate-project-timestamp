const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const isInvalidDate = (date) => date.toUTCString() === "Invalid Date";

app.get("/api/:date", (req, res) => {
  let dateVao = req.params.date;
  let date;

  if (!isNaN(Number(dateVao))) {
    date = new Date(Number(dateVao));
  } else {
    date = new Date(dateVao);
  }

  if (isInvalidDate(date)) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.get("/api", (req, res) => {
  let gio = new Date();
  res.json({ unix: gio.getTime(), utc: gio.toUTCString() });
});




















module.exports = app;
