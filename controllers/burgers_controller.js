var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});
router.post("/api/burger/insertOne", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json(result);
    });
});
router.put("/api/burger/updateAsDevoured", function(req, res) {
    burger.updateAsDevoured(req.body.id, function(result) {
        res.json(result);
    });
});


module.exports = router;
