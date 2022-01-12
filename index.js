import express from "express";
const app = express();
app.listen(3000);

// Rota USERS:

let users = [];

app.post("/users", (req, res) => {
  // requisição com body
  newUser = res.json(
    {
      id: "algo",
      name: "fulano",
      cpf: "cpf",
      notes: "notes",
    },
    "alguma mensagem de sucesso. um header"
  );
  users.push(newUser);
  return newUser, 201;
});

app.get("/users", (req, res) => {
  return users, 200;
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
