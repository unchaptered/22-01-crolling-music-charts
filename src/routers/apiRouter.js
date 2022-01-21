import express from "express";

const apiRouter=express.Router();

apiRouter.route("/")
    .get(getIndex);

export default apiRouter;