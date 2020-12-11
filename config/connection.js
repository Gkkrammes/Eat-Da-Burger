var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'Lukenelson12!',
        database: 'burgers_db'
    });
}
connection.connect(function(err) {
    if (err) {
        console.log("Error on connecting to MySQL: " + err.stack);
    }
    console.log("Connected to MySQL as id " + connection.threadId);
});


module.exports = connection;