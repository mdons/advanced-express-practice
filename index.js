let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log("Web server is now listening for messages on port", port);
});
