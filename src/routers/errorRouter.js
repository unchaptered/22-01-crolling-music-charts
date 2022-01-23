import express from "express";
import { notExistsPage } from "../controllers/homeControllers.js";

const errorRouter=express.Router();

errorRouter.route("/").get(notExistsPage);
errorRouter.route("/:non").get(notExistsPage);
errorRouter.route("/:non/:non").get(notExistsPage);

export default errorRouter;