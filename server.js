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
con.connect((err) => {
  if(err) throw err;
  console.log("connected to database")
})
app.get("/", (req, res) => {
  res.send("todoapp server");
});
app.get("/add", (req, res) => {
  con.query(`INSERT INTO tasks (text, cardId) VALUES (${req.query.text}, ${req.query.cardId} )`, (err, result) => {
    if(err) throw err;
    console.log(result)
  });
});
app.listen(port, () => {
  console.log("server is listening on port: " + port);
});
