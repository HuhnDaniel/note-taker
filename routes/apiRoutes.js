const notesData = require("../db/db.json");
const router = require("express").Router();
const fs = require("fs");

// Direct to retrieve api notes
router.get("/notes", (req, res) => {
    res.json(notesData);
})
// Direct to post api notes
.post("/notes", (req, res) => {
    notesData.forEach(note => {
        note.id++;        
    });

    const newNote = req.body;
    newNote.id = 0;
    console.log(newNote);

    // Move the new note into the notes array then save it to db.json
    notesData.unshift(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(notesData), err => {
        if (err) throw err;

        console.log("File saved");
    });

    res.end();
});

// Direct to delete a specific note
router.delete("/notes/:id", (req, res) => {
    const chosenId = req.params.id;

    notesData.splice(chosenId, 1);

    for (let i = chosenId; i < notesData.length; i++) {
        notesData[i].id--;
    }

    fs.writeFile("./db/db.json", JSON.stringify(notesData), err => {
        if (err) throw err;

        console.log("File deleted");
    });

    res.end();
});

module.exports = router;