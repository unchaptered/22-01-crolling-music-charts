export const getJoin=(req,res)=>{
    return res.render("./user/join",{
        pageTitle: "회원가입"
    });
}
export const postJoin=(req,res)=>{
}
export const getLogin=(req,res)=>{
    return res.render("./user/login",{
        pageTitle: "로그인"
    });
}
export const postLogin=(req,res)=>{
}
export const getProfile=(req,res)=>{
    return res.render("./user/login",{
        pageTitle: "프로필"
    });
}
export const postProfile=(req,res)=>{
}
export const getWithdraw=(req,res)=>{
    return res.render("./user/login",{
        pageTitle: "회원탈퇴"
    });
}
export const posWithdrawt=(req,res)=>{
}