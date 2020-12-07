const express = require("express");

var app = express();

app.use("/api", require("./producto.rutas"));
app.use("/api", require("./usuario.rutas"));

module.exports = app;