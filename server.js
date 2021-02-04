const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: 'localhost',
  user: 'usr',
  password: 'password',
  database: 'react_to_do',
});
con.connect()
app.get("/", (req, res) => {
  res.send("todoapp server");
});
app.post("/add", () => {
  
});
app.listen(port, () => {
  console.log("server is listening on port: " + port);
});
