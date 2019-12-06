import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { getJoin, postJoin, login, logout } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;