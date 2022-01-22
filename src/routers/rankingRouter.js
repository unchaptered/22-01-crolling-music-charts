import express from "express";
import { notExistsPage } from "../controllers/homeControllers.js";
import {
    dailyBugChartsViews,
    weeklyBugChartsViews,
    dailyMelonChartsViews,
    weeklyMelonChartsViews,
    monthlyMelonChartsViews
} from "../controllers/rankingControllers.js";


const rankingRouter=express.Router();

rankingRouter
    .route("/bugs/daily")
    .get(dailyBugChartsViews);
rankingRouter
    .route("/bugs/weekly")
    .get(weeklyBugChartsViews);
rankingRouter
    .route("/bugs/:non")
    .get(notExistsPage);

rankingRouter
    .route("/melon/daily")
    .get(dailyMelonChartsViews);
rankingRouter
    .route("/melon/weekly")
    .get(weeklyMelonChartsViews);
rankingRouter
    .route("/melon/monthly")
    .get(monthlyMelonChartsViews);
rankingRouter
    .route("/melon/:non")
    .get(notExistsPage);

rankingRouter
    .route("/:non")
    .get(notExistsPage);


export default rankingRouter;