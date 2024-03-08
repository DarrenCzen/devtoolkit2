const express = require("express");
const database = require("./mock_data");

let app = express();

app.use(express.json());

router = express.Router();

router.get("/people", (request, response) => {
  console.log(request.query.id);
  response.send(database.get_all_users());
});

app.use(router);

app.listen(3000);
