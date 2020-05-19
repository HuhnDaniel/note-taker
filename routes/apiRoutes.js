const notesData = require("../db/db.json");
const router = require("express").Router();
const fs = require("fs");

router.get("/notes", (req, res) => {
    res.json(notesData);
}).post("/notes", function(req, res) {
    const newNote = req.body;
    console.log(newNote);
    notesData.push(newNote);
    console.log(notesData);
    fs.writeFile("./db/db.json", JSON.stringify(notesData), err => {
        if (err) throw err;

        console.log("File saved");
    });
    res.json(newNote);
});

module.exports = router;