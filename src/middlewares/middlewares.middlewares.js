import { USERS } from "./config/configs.config";

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
