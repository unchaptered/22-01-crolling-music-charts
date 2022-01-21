import express from "express";

const apiRouter=express.Router();

apiRouter.route("/")
    .get(crollingMelonCharts);

export default apiRouter;