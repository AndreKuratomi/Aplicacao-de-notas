import express from "express";
import { v1 as uuidv1, v4 as uuidv4, v5 as uuidv5 } from "uuid";

const app = express();
app.use(express.json());
app.listen(3000);

// Rota USERS:

const doesCpfExist = (req, res, next) => {
  const { cpf } = req.params;
  const userFound = users.find((user) => user.cpf === parseInt(cpf));

  if (userFound === undefined) {
    return res
      .status(404)
      .json({ error: "invalid cpf - user is not registered" });
  }

  req.user = users[userFound];
  req.userFound = userFound;

  next();
};

let users = [];

app.post("/users", (req, res) => {
  const { name, cpf } = req.body;

  const newUser = {
    id: uuidv4(),
    name,
    cpf,
    notes: [],
  };

  users.push(newUser);

  const result = {
    message: "New usuer created!",
    users: users[users.indexOf(newUser)],
  };

  res.status(201).json(result);
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.patch("/users/:cpf", doesCpfExist, (req, res) => {
  const { cpf } = req.params;
  console.log(req.params);
  const { name } = req.body;

  const userFound = users.find((user) => user.cpf === parseInt(cpf));
  //   const updatedUser = {
  //     id: uuidv4(),
  //     name,
  //     cpf,
  //     notes: [],
  //   };
  console.log(userFound);

  userFound.name = name;

  const result = {
    message: "User updated!",
    users: users[users.indexOf(userFound)],
  };

  res.status(201).json(result);
  return userUpdated, 200;
});

app.delete("/users/:cpf", doesCpfExist, (req, res) => {
  userDeleted = res.json({
    message: "User is deleted",
    users: [],
  });
});
