import { Router } from "express";

import {
  onlyOneCPF,
  doesCpfExist,
} from "../middlewares/middlewares.middlewares";
import {
  createUser,
  listUsers,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";

const route = Router();

export const userRoutes = (app) => {
  route.post("", onlyOneCPF, createUser);
  route.get("", listUsers);
  route.patch("/:cpf", doesCpfExist, updateUser);
  route.delete("/:cpf", doesCpfExist, deleteUser);

  app.use("/users", route);
};
