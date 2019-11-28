const express = require("express");
const bodyParser = require("body-parser");
const cheerio = require("cheerio"); // Makes HTTP request for HTML page
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client"));
}

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/GetMoving');

app.listen(PORT, function (){
    console.log(`API Server now listening on PORT ${PORT}!`);
})