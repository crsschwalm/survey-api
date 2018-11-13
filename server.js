require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./api/routes");
const bodyParser = require("body-parser");
var cors = require("cors");

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cors({ credentials: true }));

app.use("/api", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
