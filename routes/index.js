const express = require("express");
const cors = require("cors");
const users = require("./users");
const auth = require("./auth");
const teams = require("./teams");
const patients = require("./patients");
// const rooms = require("./rooms");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  exposedHeaders: "Authorization"
};

module.exports = function (app) {
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use("/api/auth", auth);
    app.use("/api/users", users);
    app.use("/api/teams", teams);
    app.use("/api/patients", patients);
    // app.use("/api/rooms", rooms);
    // add error handler & logger
}