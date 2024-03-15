const express = require("express");
const user = require("../backend/api/users");
const customers = require("../backend/api/customers");
const test = require("../backend/api/test");
const db = require("./database");

let app = express();

var cors = require("cors");
app.use(cors());
app.use(express.json());

//app.use("/users", user.router);
app.use("/customers", customers.router);
app.use("/", test.router);

app.get("/users", (req, res) => {
  console.log("here");

  db.query("SELECT * FROM Inventory", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
      console.log(results);
    }
    res.send(results);
  });
});

app.listen(3000, (errors) => {
  if (errors) console.error("not working");
  else console.log("Listening on Port 3000");
});
