const notesData = require("../db/db.json");
const router = require("express").Router();

router.get("/notes", (req, res) => {
    res.json(notesData);
}).post("/notes", function(req, res) {
    notesData.push(req.body);
})

module.exports = router;