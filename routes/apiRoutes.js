const notesData = require("../db/db.json");
const router = require("express").Router();

router.get("/notes", function(req, res) {
    res.json(notesData);
}).post("/notes", function(req, res) {
    notesData.push(req.body);
})