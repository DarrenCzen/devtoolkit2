const express = require("express");
const user = require("../backend/api/users");

let app = express();

app.use(express.json());
app.use("/users", user.router);

router = express.Router();

router.get("/", (request, response) => {
  response.send("Hello World");
});

app.use(router);

app.listen(3000, (errors) => {
  if (errors) console.error("not working");
  else console.log("Listening on Port 3000");
});
