import axios from "axios";
import cherrio from "cheerio";

export const URLs={
    melon:[
        "https://www.melon.com/chart/day/index.htm",
        "https://www.melon.com/chart/week/index.htm",
        "https://www.melon.com/chart/month/index.htm"
    ],
    bugs:[
        "https://music.bugs.co.kr/chart/track/day/total",
        "https://music.bugs.co.kr/chart/track/week/total"
    ],
}

/**
 * data 구조
 * 1. index
 * 2. title
 * 3. singer
 * 4. elbum
 * 5. ranking_changing
 *   5.1. count 숫자(기본값 0)
 *   5.2. 상승 동일 하락 // 진입
 * @param {*} HTML 
 * @returns 
 */
export function extractBugsRanking(HTML) {
    const $=cherrio.load(HTML.data);

    // Bugs 일일차트와 주간차트의 div의 id 값이 달라서 nth-child 를 사용하였다.
    const RANKING=$("div.innerContainer div:nth-child(3) table tbody").children("tr");

    let row=null;
    let datas=[];
    let data={};
    RANKING.each((items,element)=>{
        row=$(element).children("td");

        data={};
        data.index=items+1;
        data.title=$(element).find("th p a").text();
        data.singer=[$(row[4]).find("p a:nth-child(1)").text()];
        
        data.elbum=$(row[5]).find("a").text();

        const changeDiv=$(row[1]).find("div p");
        let count=$(changeDiv).find("em").text();
        const arr=$(changeDiv).find("span").text().split(" ");
        let arrow="";
        if(arr[1]!==undefined) {
            arrow=(arr[1]==="상승") ? "상승" : "하강"; //상승, 하강
        } else if (arr[1]==="변동없음") {
            arrow="동일"
        } else if (count==="NEW" || count==="재진입" || count==="HOT") {
            arrow="진입"
            count=0;
        } else {
            arrow="-"
        }

        data.ranking_changing={ arrow, count };

        datas.push(data);
    });

    return datas;
}

/**
 * data 구조
 * 1. index
 * 2. title
 * 3. singer
 * 4. elbum
 * 5. ranking_changing
 *   5.1. count 숫자(기본값 0)
 *   5.2. 상승 동일 하락 // 진입
 * @param {*} HTML 
 * @returns 
 */
export function extractMelonRanking(HTML) {
    const $=cherrio.load(HTML.data);

    const RANKING=$("form#frm div.service_list_song table tbody").children("tr");

    let row=null;
    let datas=[];
    let data={};
    RANKING.each((items,element)=>{
        row=$(element).children("td");

        data={};

        const songDataDiv=$(row[5]).find("div div");
        data.index=items+1;
        data.title=$(songDataDiv).find("div:nth-child(1) span:nth-child(1) a").text();
        const singerA=$(songDataDiv).find("div:nth-child(3) span").children("a");
        let singer=[];
        singerA.each((items,element)=>{
            singer.push($(element).text());
        });
        data.singer=singer;
        // const changing=$(row[2]).find("div span span:nth-child(1) span").text();

        data.elbum=$(row[6]).find("div div div a").text();

        const changeDiv=$(row[2]).find("div span");
        const rankings=$(changeDiv).find("span:nth-child(1) span").text().split(" ")[2];
        data.ranking_changing={
            arrow: rankings.substring(0,2),
            count: rankings.substring(2)
        };

        datas.push(data);
    });

    return datas;
}