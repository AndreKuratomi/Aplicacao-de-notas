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
  console.log(userFound);

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
    message: "New usuer created!",
    USERS: USERS[USERS.indexOf(newUser)],
  };

  res.status(201).json(result);
});

app.get("/users", (req, res) => {
  res.status(200).json(USERS);
});

app.get("/users/:cpf", doesCpfExist, (req, res) => {
  res.status(200).json(users);
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
  console.log(USERS);

  const result = {
    message: "User is deleted",
    USERS,
  };

  res.status(200).json(result);
});

// ROTA NOTATIONS

app.post("/users/:cpf/notes", (req, res) => {});

app.get("/users/:cpf/notes", (req, res) => {});

app.patch("/users/:cpf/notes/:id", (req, res) => {});

app.delete("/users/:cpf/notes/:id", (req, res) => {});
