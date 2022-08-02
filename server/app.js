const express = require("express");
const app = express();
const cors = require("cors");
const wheater = require('../router/wheater.js');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
   
    next();
});

app.use('/wheater', wheater);
app.listen(PORT);