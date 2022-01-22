import express from "express";

import {
    dailyBugChartsCrolling,
    weeklyBugChartsCrolling,
    dailyMelonChartsCrolling,
    weeklyMelonChartsCrolling,
    monthlyMelonChartsCrolling
} from "../controllers/apiControllers.js";
import { notExistsPage } from "../controllers/homeControllers.js";

const apiRouter=express.Router();

apiRouter.route("/bugs/daily").get(dailyBugChartsCrolling);
apiRouter.route("/bugs/weekly").get(weeklyBugChartsCrolling);

// 존재하지 않는 페이지
// apiRouter.route("/bugs/:non").get(notExistsPage);
// apiRouter.route("/bug/:non/:non").get(notExistsPage);

apiRouter.route("/melon/daily").get(dailyMelonChartsCrolling);
apiRouter.route("/melon/weekly").get(weeklyMelonChartsCrolling);
apiRouter.route("/melon/monthly").get(monthlyMelonChartsCrolling);

// 존재하지 않는 페이지
// apiRouter.route("/melon/:non").get(notExistsPage);
// apiRouter.route("/melon/:non/:non").get(notExistsPage);

// 존재하지 않는 페이지
// apiRouter.route("/:non").get(notExistsPage);

export default apiRouter;