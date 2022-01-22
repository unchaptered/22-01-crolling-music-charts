export const getHome=(req, res)=>{
    // Top 100 melon < 순위 // 일간 10+
    // Top 100 melon < 순위 // 주간 15+
    // Top 100 melon < 순위 // 월간 30+

    // Top 100 bugs < 순위 // 일간 10+
    // Top 100 bugs < 순위 // 주간 15+

    return res.render("index",{
        pageTitle:"작은 프로그램",
    });
}

export const notExistsPage=(req, res)=>{
    return res.redirect("/");
}