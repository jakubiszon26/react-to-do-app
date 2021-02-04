const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB
  });
app.get("/", (req, res) => {
  res.send("todoapp server");
});
app.post("/add", () => {});

app.listen(port, () => {
  console.log("server is listening on port: " + port);
});
