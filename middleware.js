import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "BaeTube";
    res.locals.routes = routes;
    next();
};