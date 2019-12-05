import express from "express";
import routes from "../routes";
import { videos, videoDetail, editVideo, deleteVideo } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, videos);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;