// Handle requests for user information
const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/all", (req, res) => {
  db.query(`SELECT * from Customers`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
      console.log(results);
      res.send(results);
    }
  });
});

module.exports = { router };
