require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");

const routes = require("./api/routes");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cors({ credentials: true, origin: true }));

app.use("/api", routes);
app.get("/", (req, res) => res.json(listEndpoints(app)));

app.listen(port, () => console.log(`Listening on port ${port}`));
