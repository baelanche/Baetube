import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin
} from "../controller/userController";
import { onlyPublic } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
