let express = require("express");
const vehiclesRouter = require("./routers/vehiclesRouter");
const contactsRouter = require("./routers/contactsRouter");
const commentsRouter = require("./routers/commentsRouter");
const productsRouter = require("./routers/productsRouter");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(contactsRouter, vehiclesRouter, commentsRouter, productsRouter);

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("Web server is now listening for messages on port", port);
});
