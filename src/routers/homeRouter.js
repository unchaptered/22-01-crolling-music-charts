import express from "express";
import { getIndex } from "../controllers/homeController.js";

const homeRouter=express.Router();

homeRouter.route("/")
    .get(getIndex);

export default homeRouter;