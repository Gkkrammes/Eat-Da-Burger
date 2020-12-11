var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", {burger_name: burgerName, devoured: 0}, function(res) {
            cb(res);
        });
    },
    
    updateAsDevoured: function(idUpd, cb) {
        orm.updateOne("burgers", { devoured: 1 }, { id: idUpd }, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
