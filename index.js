import express from "express";
import { v1 as uuidv1, v4 as uuidv4, v5 as uuidv5 } from "uuid";

const app = express();
app.use(express.json());
app.listen(3000);

// Rota USERS:

let users = [];

app.post("/users", (req, res) => {
  // requisição com body
  const { name, cpf } = req.body;
  //   console.log(data);

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

app.patch("/users/<cpf>", (req, res) => {
  return userUpdated, 200;
});

app.delete("/users/<cpf>", (req, res) => {
  userDeleted = res.json({
    message: "User is deleted",
    users: [],
  });
});
