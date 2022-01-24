import { v1 as uuidv1, v4 as uuidv4, v5 as uuidv5 } from "uuid";

import { USERS } from "../config/configs.config";

export const createUser = (req, res) => {
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
};

export const listUsers = (req, res) => {
  res.status(200).json(USERS);
};

export const updateUser = (req, res) => {
  const { name, cpf } = req.body;

  if (!name || !cpf) {
    return res
      .status(400)
      .json({ error: "One of the required body fields is missing!" });
  }

  req.userFound.name = name;
  req.userFound.cpf = cpf;

  const result = {
    message: "User updated!",
    USERS,
  };

  res.status(200).json(result);
};

export const deleteUser = (req, res) => {
  const toDelete = req.userFound;
  const newUSERS = USERS.filter((elt) => elt !== toDelete);
  USERS = newUSERS;

  const result = {
    message: "User is deleted",
    USERS,
  };

  res.status(200).json(result);
};
