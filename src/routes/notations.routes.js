import { Router } from "express";

import {
  doesCpfExist,
  doesIdExist,
} from "../middlewares/middlewares.middlewares";

import {
  createNotation,
  listNotations,
  updateNotation,
  deleteNotation,
} from "../controllers/notations.controller";

const route = Router();

export const notationRoutes = (app) => {
  route.post("/:cpf/notes", doesCpfExist, createNotation);
  route.get("/:cpf/notes", doesCpfExist, listNotations);
  route.patch("/:cpf/notes/:id", doesCpfExist, doesIdExist, updateNotation);
  route.delete("/:cpf/notes/:id", doesCpfExist, doesCpfExist, deleteNotation);

  app.use("/users", route);
};
