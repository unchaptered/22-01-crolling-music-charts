import axios from "axios";
import cherrio from "cheerio";

/**
 * 해당 메서드는 데이터를 만들어내는데, 다음과 같다.
 * 
 * [{ title, singer, elbum, ranking_change }]
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getIndex=async(req,res)=>{
    // 뮤직차트
    const HTML=await axios.get("https://www.melon.com/chart/month/index.htm");
    /*  TOP100, 일간, 주간, 월간 이 양식 동일
        body
        div#wrap
        div#cont_wrap
        div#conts_section
        div#conts
        div#tb_list
        form#frm
        div.service_list_song
        table
        tbody
        tr << 실제 순위
    */
    const $=cherrio.load(HTML.data);
    const RANKING=$("form#frm div.service_list_song table tbody").children("tr");
    let rows=null;
    let datas=[];
    let data={};
    // key, value 로 forEach 의 역순이고 JQuery 메서드이다.
    RANKING.each((items, element)=>{
        /*
            0 체크박스,
            1 순위, <
            2 순위상승, <
            3 표지,
            4 가사, 
            5 곡정보(제목,가수(arr)), <
            6 앨범, <
            7 좋아요,
            8 듣기,
            9 담기,
            10 다운,
            11 뮤비
        */
        rows=$(element).children("td");

        
        data={};

        // 곡정보 탭에서 곡제목, 가수 뽑기
        const songDataObj=$(rows[5]).find("div div div");
        data.title=$(songDataObj).find("span:nth-child(1) a").text();
        const singerDataObj=$(songDataObj).find("span:nth-child(2)");
        let singers=[];
        singerDataObj.each((items, element)=>{
            singers.push($(element).find("a").text());
        });
        data.singer=singers;

        // 앨범 탭에서 앨범 제목 뽑기
        data.elbum=$(rows[6]).find("div div div span a").text();

        // 순위 탭에서 순위 뽑기

        // 순위 진입순위 진입
        // 단계 상승단계 상승23
        // 단계 하락단계 하락13
        const spans=$(rows[2]).find("div span");
        const upAndDown=$(spans).find("span:nth-child(1) span").text().split(" ");
        const sort=upAndDown[0];
        const arrow=upAndDown[2].substring(0,2);
        const count=(sort==="단계") ? upAndDown[2].substring(2) : '0';
        data.ranking_change={ sort, arrow, count };

        datas.push(data);
    })

    // console.log(datas);
    
    return res.render("index",{
        pageTitle:"작은 프로그램"
    });
}

// 둘중하나 (그룹)
// const songDataObj=$(rows[5]).find("div div");
// data.title=$(songDataObj).find("div:nth-child(1) span:nth-child(1) a").text();
// const singerDataObj=$(songDataObj).find("div:nth-child(2)")