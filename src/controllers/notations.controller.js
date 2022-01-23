import { v1 as uuidv1, v4 as uuidv4, v5 as uuidv5 } from "uuid";

import { doesIdExist } from "../middlewares/middlewares.middlewares";

// ROTA NOTATIONS

app.post("/users/:cpf/notes", doesCpfExist, (req, res) => {
  const date = new Date();
  const now = date.toJSON();

  const user = req.userFound;
  const userNotes = user.notes;
  const { title, content } = req.body;

  const newNotation = {
    id: uuidv4(),
    title,
    content,
    created_at: now,
  };

  userNotes.push(newNotation);

  res.status(201).json({
    message: `${title} was added into ${user.name}'s notes`,
  });
});

app.get("/users/:cpf/notes", doesCpfExist, (req, res) => {
  const user = req.userFound;
  const userNotes = user.notes;
  res.status(200).json(userNotes);
});

app.patch("/users/:cpf/notes/:id", doesCpfExist, doesIdExist, (req, res) => {
  const date = new Date();
  const now = date.toISOString();

  const { title, content } = req.body;
  const user = req.userFound;
  const userNotes = user.notes;
  const note = req.noteFound;

  note.title = title;
  note.content = content;
  note.updated_at = now;

  const result = {
    message: "Notation updated!",
    userNotes,
  };

  res.status(200).json(result);
});

app.delete("/users/:cpf/notes/:id", doesCpfExist, doesIdExist, (req, res) => {
  const user = req.userFound;
  let userNotes = user.notes;
  console.log(userNotes);

  const toDelete = req.noteFound;

  const newUserNotes = userNotes.filter((elt) => elt !== toDelete);
  userNotes = newUserNotes;
  console.log(userNotes);

  const result = {
    message: "Notation deleted!",
    newUserNotes,
  };

  res.status(200).json(result);
});
