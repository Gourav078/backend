const exp = require("express");
const { getNote, createNote, deleteNote, updateNote } = require("../controllers/notes");
const auth = require("../middleware/auth");
const notesroute = exp.Router();

notesroute.get("/", auth, getNote);

notesroute.post("/", auth, createNote);

notesroute.delete("/:id", auth, deleteNote);

notesroute.put("/:id", auth, updateNote);

module.exports = notesroute;