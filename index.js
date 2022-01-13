import express from "express";
import { v1 as uuidv1, v4 as uuidv4, v5 as uuidv5 } from "uuid";

const app = express();
app.use(express.json());
app.listen(3000);

// Rota USERS:

let USERS = [];

const doesCpfExist = (req, res, next) => {
  const { cpf } = req.params;
  const userFound = USERS.find((user) => user.cpf === cpf);

  if (userFound === undefined) {
    return res
      .status(404)
      .json({ error: "invalid cpf - user is not registered" });
  }

  req.userFound = userFound;

  next();
};

app.post("/users", (req, res) => {
  const { name, cpf } = req.body;

  const newUser = {
    id: uuidv4(),
    name,
    cpf,
    notes: [],
  };

  USERS.push(newUser);

  const result = {
    message: "New user created!",
    USERS: USERS[USERS.indexOf(newUser)],
  };

  res.status(201).json(result);
});

app.get("/users", (req, res) => {
  res.status(200).json(USERS);
});

app.patch("/users/:cpf", doesCpfExist, (req, res) => {
  const { name } = req.body;

  console.log(req.userFound);

  req.userFound.name = name;

  const result = {
    message: "User updated!",
    USERS,
  };

  res.status(201).json(result);
});

app.delete("/users/:cpf", doesCpfExist, (req, res) => {
  const toDelete = req.userFound;
  const newUSERS = USERS.filter((elt) => elt !== toDelete);
  USERS = newUSERS;

  const result = {
    message: "User is deleted",
    USERS,
  };

  res.status(200).json(result);
});

// ROTA NOTATIONS

const doesIdExist = (req, res, next) => {
  const { id } = req.params;
  const user = req.userFound;
  const userNotes = user.notes;

  const noteFound = userNotes.find((note) => note.id === id);

  if (noteFound === undefined) {
    return res
      .status(404)
      .json({ error: "invalid id - user is not registered" });
  }

  req.noteFound = noteFound;

  next();
};

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
  const userNotes = user.notes;
  console.log(userNotes);

  const toDelete = req.noteFound;

  const newUserNotes = userNotes.filter((elt) => elt !== toDelete);
  // userNotes = newUserNotes;
  console.log(userNotes);

  const result = {
    message: "Notation deleted!",
    newUserNotes,
  };

  res.status(200).json(result);
});
