var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lukenelson12!",
    database: "burger_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  });
    //render main index.html
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, burgers) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { burgers });
    });
  });
    //Create a new burger
  app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      // Send the id of a new burger back
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });

  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  