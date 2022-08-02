const express = require("express");
const app = express();
const cors = require("cors");
const wheater = require('../router/wheater.js');
const PORT = process.env.PORT || 5000;
app.options('*', cors()) 
app.use('/wheater', wheater);
app.use(cors());
app.listen(PORT);