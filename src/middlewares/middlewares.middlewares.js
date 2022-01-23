import { USERS } from "../config/configs.config.js";

export const onlyOneCPF = (req, res, next) => {
  const { cpf } = req.body;
  const cpfAlreadyExists = USERS.find((user) => user.cpf === cpf);

  if (cpfAlreadyExists) {
    return res.status(409).json({ error: "CPF already registered!" });
  }

  next();
};

export const doesCpfExist = (req, res, next) => {
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

export const doesIdExist = (req, res, next) => {
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
