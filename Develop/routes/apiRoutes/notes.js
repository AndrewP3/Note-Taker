const router = require("express").Router();
const path = require("path");
const { createNewNote, deleteNote } = require("../public/notes.html");

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.post("/notes", function (req, res) {
  req.body.id = notes.length.toString();
  let note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", function (req, res) {
  deleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;
