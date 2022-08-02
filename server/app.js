const express = require("express");
const app = express();
const cors = require("cors");
const wheater = require('../router/wheater.js');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
app.use('/wheater', wheater);
app.use(cors());
app.listen(PORT);