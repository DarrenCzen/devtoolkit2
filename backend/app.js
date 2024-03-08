const express = require("express");
const user = require("../backend/api/users");
const test = require("../backend/api/test");

let app = express();

app.use(express.json());

app.use("/users", user.router);
app.use("/", test.router);

app.listen(3000, (errors) => {
  if (errors) console.error("not working");
  else console.log("Listening on Port 3000");
});
