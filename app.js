//imports
const express = require("express");
const cors = require("cors");
const router = require('./routes/douladoRouter');

//start up server
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(router);

//configure port
const PORT = process.env.PORT || 8000;

//listen to port
app.listen(PORT, () => {
  console.log("listening on port 8000");
});