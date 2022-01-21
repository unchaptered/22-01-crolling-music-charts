import express from "express";
import morgan from "morgan";

import MongoStore from "connect-mongo";
import session from "express-session";

import flash from "express-flash";

import homeRouter from "./routers/homeRouter.js";
import apiRouter from "./routers/apiRouter.js";

const app=express();
const morganLog=morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views"); 

app.use(morganLog);

// 익스프레스가 req.body, JSON 을 이해하기 위한 설정
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use("/assets", express.static("assets"));

// How can we send a message between two pages, except "render".
app.use("/", homeRouter);
app.use("/api", apiRouter);

export default app;