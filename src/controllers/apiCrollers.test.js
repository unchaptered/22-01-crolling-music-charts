import axios from "axios";
import { URLs, extractMelonRanking, extractBugsRanking } from "./apiCrollers.js";

describe("URLs Validator", ()=>{
    test("========== Axios Throws 404 ==========", async()=>{
        let HTML;
        try {
            HTML=await axios("localhost:4000/anyUrls");
        } catch (error) {
            HTML=undefined;
        }
        expect(HTML===undefined).toEqual(true);
    });
    test("========== Bugs Return 404 ==========", async()=>{
        let HTML;
        try {
            HTML=await axios("https://music.bugs.co.kr/chart/track/dsfmsd");
        } catch (error) {
            HTML=undefined;
        }
        expect(HTML===undefined).toEqual(true);
    });
    test("isOk Bugs Daily Exists?", async()=>{
        let HTML;
        try {
            HTML=await axios(URLs.bugs[0]);
        } catch (error) {
            HTML=undefined;
        }
        expect(HTML!==undefined).toEqual(true);
    });
    test("isOk Bugs Weekly Exists?", async()=>{
        let HTML;
        try {
            HTML=await axios(URLs.bugs[1]);
        } catch (error) {
            HTML=undefined;
        }
        expect(HTML!==undefined).toEqual(true);
    });
    test("========== Bugs Return 404 ==========", async()=>{
        let HTML;
        try {
            HTML=await axios("https://www.melon.com/chart/fdfmdkte");
        } catch (error) {
            HTML=undefined;
        }
        expect(HTML===undefined).toEqual(true);
    });
    test("isOk Melon Daily Exists?", async()=>{
        let HTML;
        try {
            HTML=await axios(URLs.melon[0]);
        } catch (error) {
            HTML=undefined;
        }
        expect(HTML!==undefined).toEqual(true);
    });
    test("isOk Melon Weekly Exists?", async()=>{
        let HTML;
        try {
            HTML=await axios(URLs.melon[1]);
        } catch (error) {
            HTML=undefined;
        }
        expect(HTML!==undefined).toEqual(true);
    });
    test("isOk Melon Monthly Exists?", async()=>{
        let HTML;
        try {
            HTML=await axios(URLs.melon[2]);
        } catch (error) {
            HTML=undefined;
        }
        expect(HTML!==undefined).toEqual(true);
    });
});

describe("Bugs Extractor Check", ()=>{
    test("========== Bugs Datas Check ==========", ()=>{});
    test("isOk Bugs Daily Charts Length 100?", async()=>{
        let HTML;
        try {
            HTML=await axios.get(URLs.bugs[0]);
        } catch(error) {
            HTML=undefined;
        }

        if (HTML===undefined) {
            expect(HTML===undefined).toEqual(true);
        } else {
            const datas=extractBugsRanking(HTML);
            expect(datas.length===100).toEqual(true);
        }
    });
    test("isOk Bugs Weekly Charts Length 100?", async()=>{
        let HTML;
        try {
            HTML=await axios.get(URLs.bugs[1]);
        } catch(error) {
            HTML=undefined;
        }

        if (HTML===undefined) {
            expect(HTML===undefined).toEqual(true);
        } else {
            const datas=extractBugsRanking(HTML);
            expect(datas.length===100).toEqual(true);
        }
    });
})

describe("Melon Extractor Check", ()=>{
    test("========== Melon Datas Check ==========", ()=>{});
    test("isOk Melon Daily Charts Length 100?", async()=>{
        let HTML;
        try {
            HTML=await axios.get(URLs.melon[0]);
        } catch(error) {
            HTML=undefined;
        }

        if (HTML===undefined) {
            expect(HTML===undefined).toEqual(true);
        } else {
            const datas=extractMelonRanking(HTML);
            expect(datas.length===100).toEqual(true);
        }
    });
    test("isOk Melon Weekly Charts Length 100?", async()=>{
        let HTML;
        try {
            HTML=await axios.get(URLs.melon[1]);
        } catch(error) {
            HTML=undefined;
        }

        if (HTML===undefined) {
            expect(HTML===undefined).toEqual(true);
        } else {
            const datas=extractMelonRanking(HTML);
            expect(datas.length===100).toEqual(true);
        }
    });
    test("isOk Melon Monthly Charts Length 100?", async()=>{
        let HTML;
        try {
            HTML=await axios.get(URLs.melon[2]);
        } catch(error) {
            HTML=undefined;
        }

        if (HTML===undefined) {
            expect(HTML===undefined).toEqual(true);
        } else {
            const datas=extractMelonRanking(HTML);
            expect(datas.length===100).toEqual(true);
        }
    });
});
