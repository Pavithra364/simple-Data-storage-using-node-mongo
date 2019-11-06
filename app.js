require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var db = require("./dbConnection");
var app = express();

app.use(bodyParser.json());
app.use(cors());

dbConnection()

function dbConnection() {
    db.connect()
    .then(() => {
        require('./routes/userRoute')(app);
        require('./routes/loginRoute')(app);
        app.listen( process.env.PORT , () => {
            console.log("The server has started ")
        });
    }).catch((error) => {
        console.log(error);
    });
}
