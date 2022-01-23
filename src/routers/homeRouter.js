import express from "express";
import { getHome } from "../controllers/homeControllers.js";

const homeRouter=express.Router();

homeRouter.route("/").get(getHome);

export default homeRouter;