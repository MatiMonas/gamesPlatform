const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const errorHandler = require("./utils/middlewares/errorHandler");
const setHeaders = require("./utils/middlewares/setheaders");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(setHeaders);
server.use(errorHandler);

//seteo las rutas de mi app
server.use("/api", routes);

// Error catching endware.

module.exports = server;
