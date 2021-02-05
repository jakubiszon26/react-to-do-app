const express = require("express");
const port = process.env.PORT || 8000 || 8001;
const app = express();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "usr",
  password: "password",
  database: "react_to_do",
});
con.connect((err) => {
  if (err) throw err;
  console.log("connected to database");
});
app.get("/", (req, res) => {
  res.send("todoapp server");
});
app.get("/add", (req, res) => {
  con.query(
    `INSERT INTO tasks (text, cardId) VALUES (${req.query.text}, ${req.query.cardId} )`,
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
});
app.get("/pullData", () => {
  // data template
  // let dataTemplate = {
  //   cards: [{id: 1, title: "To do", tasks: []}],
  // }
  con.query(`SELECT * FROM cards`, (err, results) => {
    if (err) throw err;
    let string = JSON.stringify(results);
    const cards = JSON.parse(string)
    console.log(cards);
    con.query(`SELECT * FROM tasks`, (err, rows) => {
      if(err) throw err;
      string = JSON.stringify(rows)
      const tasks = JSON.parse(string)
      console.log(tasks);
    })
  });
}); 
app.listen(port, () => {
  console.log("server is listening on port: " + port);
});
