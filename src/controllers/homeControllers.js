export const getHome=(req, res)=>{
    return res.render("index",{
        pageTitle:"작은 프로그램",
    });
}