import express from "express";
import { notationRoutes } from "./notations.routes";
import { userRoutes } from "./users.routes";

export const routes = (app) => {
  app.use(express.json());
  userRoutes(app);
  notationRoutes(app);
};
