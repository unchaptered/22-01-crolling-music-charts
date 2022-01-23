import express from "express";
import morgan from "morgan";

import homeRouter from "./routers/homeRouter.js";
import rankingRouter from "./routers/rankingRouter.js";
import errorRouter from "./routers/errorRouter.js";

const app=express();
const morganLog=morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views"); 

app.use(morganLog);

// 익스프레스가 req.body, JSON 을 이해하기 위한 설정
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use("/assets", express.static("assets"));

app.use("/", homeRouter);
app.use("/ranking", rankingRouter);

// 404 페이지로의 연결을 위해서 errorRouter 를 만들어서 최하단에 추가하였습니다.
app.use("/:non", errorRouter);

export default app;