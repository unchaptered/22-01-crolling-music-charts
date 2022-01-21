import express from "express";

import {} from "../controllers/userControllers.js";


const userRouter=express.Router();

userRouter
    .route("/login")
    .get(getLogin)
    .post(postLogin);

userRouter
    .route("/join")
    .get(getJoin)
    .post(postJoin);

userRouter
    .route("/profile")
    .get(getProfile)
    .post(postProfile);

userRouter
    .route("/withdraw")
    .get(getWithdraw)
    .post(postWithdraw);


export default userRouter;