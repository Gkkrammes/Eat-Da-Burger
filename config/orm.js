var connection = require("./connection.js");


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, objColVals, cb) {
        var queryString = "INSERT INTO " + table + " SET ?";
        connection.query(queryString, objColVals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, objColVals, objWhere, cb) {
        var queryString = "UPDATE " + table + " SET ? WHERE ?";
        connection.query(queryString, [objColVals, objWhere], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};


module.exports = orm;