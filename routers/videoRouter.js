import express from "express";
import routes from "../routes";
import {
  videoDetail,
  getEditVideo,
  deleteVideo,
  getUpload,
  postUpload,
  postEditVideo
} from "../controller/videoController";
import { uploadVideo, onlyPrivate } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
