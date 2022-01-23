import axios from "axios";

export const getHome=async(req, res)=>{
    const HTML=await axios("https://www.naver.com/");

    return res.render("index",{
        pageTitle:"홈 페이지",
    });
}
export const notExistsPage=(req, res)=>{
    return res.redirect("/");
}