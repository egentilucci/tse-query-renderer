const express = require("express");
const app = express();
const sql = require("mssql");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');

//app.use(express.static(__dirname + "/public"));
app.use(logger("combined"));
app.use(cors()); //you need to use cors if you want any client to connect to this server

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

const config = {
    user: "lamep",
    password: "Lamep2020+",
    server: "SQL\\SQL2017",
    database: "LAMEP",
    options: {
        "enableArithAbort": true
    }
}

const configAWM = {
    user: "sa",
    password: "Sql2017",
    server: "SQL\\SQL2017",
    database: "LAMEP_AWM",
    options: {
        "enableArithAbort": true
    }
}

function queryDB(config, res, sqlQuery, funcButton) {

    console.log("\n[" + funcButton + "]");

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var sqlRequest = new sql.Request();

        // query to the database and get the records
        sqlRequest.query(sqlQuery, function (err, data) {

            if (err) console.log(err)

            console.log("~ " + Date() + " | " + sqlQuery);
            // send records as a response
            res.send(data);
            sql.close();

        });
    });
}

app.get("/", function (req, res) {

    var funcButton = req.body.func;
    var sqlQuery = "SELECT * FROM NVS_SITORD ORDER BY CODART ASC, DATACONS ASC";

    queryDB(config, res, sqlQuery, funcButton);

})

app.get("/intmov", function (req, res) {

    var funcButton = req.body.func;
    var sqlQuery = "SELECT * FROM LAMEP_DDT ORDER BY DATADOC DESC";

    queryDB(config, res, sqlQuery, funcButton);

})

app.get("/lav", function (req, res) {

    var funcButton = req.body.func;
    var sqlQuery = "SELECT * FROM NVS_ODL_LANCIO";

    queryDB(configAWM, res, sqlQuery, funcButton);

})

app.listen(3000, function () {
    console.log("Server is running on port 3000...");
})