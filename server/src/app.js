const express = require("express");
const app = express();
const sql = require("mssql");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconfig = require("./config/dbconfig");
const port = "3000";

//app.use(express.static(__dirname + '/public'));
app.use(logger("[:remote-addr] :method :url :status :res[content-length] - :response-time ms"));
app.use(cors()); //you need to use cors if you want any client to connect to this server

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

function queryDB(config, res, sqlQuery) {
  console.log("\n" + Date());

  // connect to your database
  sql.connect(config(), function (err) {
    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    // query to the database and get the records
    sqlRequest.query(sqlQuery, function (err, data) {
      if (err) console.log(err);

      console.log("DB: " + config().database + "\nQUERY: " + sqlQuery);
      // send records as a response
      res.send(data);
      sql.close();
    });
  });
}

app.get("/", function (req, res) {
  var sqlQuery = "SELECT * FROM NVS_SITORD ORDER BY CODART ASC, DATACONS ASC";

  queryDB(dbconfig.CONFIG_LAMEP, res, sqlQuery);
});

app.get("/intmov", function (req, res) {
  var sqlQuery = "SELECT * FROM LAMEP_DDT ORDER BY DATADOC DESC";

  queryDB(dbconfig.CONFIG_LAMEP, res, sqlQuery);
});

app.get("/giacmag", function (req, res) {
  var sqlQuery = "SELECT * FROM NVS_GIACMAG";

  queryDB(dbconfig.CONFIG_LAMEP, res, sqlQuery);
});

app.get("/sitmp", function (req, res) {
  var sqlQuery = "SELECT * FROM LAMEP_GIACENZA_LOTTI";

  queryDB(dbconfig.CONFIG_LAMEP, res, sqlQuery);
});

app.get("/lav", function (req, res) {
  var sqlQuery = "SELECT * FROM NVS_ODL_LANCIO";

  queryDB(dbconfig.CONFIG_LAMEP_AWM, res, sqlQuery);
});

app.get("/bysprint", function (req, res) {
  var sqlQuery = "SELECT * FROM LAMEP_BYSPRINT";

  queryDB(dbconfig.CONFIG_OPCCS, res, sqlQuery);
});

app.get("/bysmart", function (req, res) {
  var sqlQuery = "SELECT * FROM LAMEP_BYSMART ORDER BY TimeStamp DESC";

  queryDB(dbconfig.CONFIG_OPCCS, res, sqlQuery);
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}...`);
});
