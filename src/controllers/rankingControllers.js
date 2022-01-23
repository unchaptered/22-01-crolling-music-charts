import axios from "axios";
import { extractMelonRanking, extractBugsRanking, URLs } from "./apiCrollers.js";

export const dailyBugChartsViews=async(req, res)=>{
    let datas;
    try {
        const HTML=await axios.get(URLs.bugs[0]);
        datas=extractBugsRanking(HTML);

        console.log(datas);
    } catch(error) {
        console.error(error);
        return res.redirect("/");
    }

    return res.render("./template/top-ranking",{
        pageTitle: "Bugs Daily Top 100", datas
    })
}
export const weeklyBugChartsViews=async(req, res)=>{
    let datas;
    try {
        const HTML=await axios.get(URLs.bugs[0]);
        datas=extractBugsRanking(HTML);

        console.log(datas);
    } catch(error) {
        console.error(error);
        return res.redirect("/");
    }

    return res.render("./template/top-ranking",{
        pageTitle: "Bugs Weekly Top 100", datas
    })
}

export const dailyMelonChartsViews=async(req, res)=>{
    let datas;
    try {
        const HTML=await axios.get(URLs.melon[0]);
        datas=extractMelonRanking(HTML);

        console.log(datas);
    } catch(error) {
        console.error(error);
        return res.redirect("/");
    }

    return res.render("./template/top-ranking",{
        pageTitle: "Melon Daily Top 100", datas
    })
}
export const weeklyMelonChartsViews=async(req, res)=>{
    let datas;
    try {
        const HTML=await axios.get(URLs.melon[1]);
        datas=extractMelonRanking(HTML);

        console.log(datas);
    } catch(error) {
        console.error(error);
        return res.redirect("/");
    }

    return res.render("./template/top-ranking",{
        pageTitle: "Melon Weekly Top 100", datas
    })
}
export const monthlyMelonChartsViews=async(req, res)=>{
    let datas;
    try {
        const HTML=await axios.get(URLs.melon[2]);
        datas=extractMelonRanking(HTML);

        console.log(datas);
    } catch(error) {
        console.error(error);
        return res.redirect("/");
    }

    return res.render("./template/top-ranking",{
        pageTitle: "Melon Monthly Top 100", datas
    })
}