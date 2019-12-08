import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render('home', {pageTitle : "Home", videos});
}

export const search = (req, res) => {
    //const searchingBy = req.query.term;
    const { query: {term: searchingBy}} = req;
    res.render('search', {pageTitle : "Search", searchingBy, videos});
    //searchingBy: searchingBy
}

export const getUpload = (req, res) => res.render('upload', {pageTitle : "Upload"});
export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    res.redirect(routes.videoDetail(333));
}

export const videoDetail = (req, res) => res.render('videoDetail', {pageTitle : "VideoDetail"});
export const editVideo = (req, res) => res.render('editVideo', {pageTitle : "EditVideo"});
export const deleteVideo = (req, res) => res.render('deleteVideo', {pageTitle : "DeleteVideo"});