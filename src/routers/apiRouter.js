import express from "express";

import {
    notExistsPage,
    dailyBugCharts,
    weeklyBugCharts,
    dailyMelonCharts,
    weeklyMelonCharts,
    monthlyMelonCharts
} from "../controllers/apiControllers.js";

const apiRouter=express.Router();

apiRouter.route("/bugs/daily").get(dailyBugCharts);
apiRouter.route("/bugs/weekly").get(weeklyBugCharts);

// 존재하지 않는 페이지
apiRouter.route("/bugs/:non").get(notExistsPage);
apiRouter.route("/bug/:non/:non").get(notExistsPage);

apiRouter.route("/melon/daily").get(dailyMelonCharts);
apiRouter.route("/melon/weekly").get(weeklyMelonCharts);
apiRouter.route("/melon/monthly").get(monthlyMelonCharts);

// 존재하지 않는 페이지
apiRouter.route("/melon/:non").get(notExistsPage);
apiRouter.route("/melon/:non/:non").get(notExistsPage);

// 존재하지 않는 페이지
apiRouter.route("/:non").get(notExistsPage);

export default apiRouter;