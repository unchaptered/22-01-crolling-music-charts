import axios from "axios";

const BASE_URL="http://localhost:4000/";

describe("homeRouter", ()=>{ 
    // test("is it ok in naver?", async()=>{
    //     const HTML=await axios("https://www.naver.com/");
    //     const EXISTS=(HTML!==undefined);
    //     expect(EXISTS).toEqual(true);
    // });
    test("isOk /?", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(false);
    });
});

describe("rankingRouter", ()=>{
    const RANKING="/ranking";
    const BUGS=RANKING+"/bugs";
    const MELON=RANKING+"/melon";
    const WRONG="/ddddd";
    test("is404 /ranking/bugs/:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+BUGS+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    });
    test("is404 /ranking/bugs/:non/:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+BUGS+WRONG+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    });

    test("is404 /ranking/melon/:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+MELON+WRONG+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    })
    test("is404 /ranking/melon/:non/:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+MELON+WRONG+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    })

    test("is404 /ranking/:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+RANKING+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    })
    test("is404 /ranking/:non/:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+RANKING+WRONG+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    })
});

describe("errorRouter", ()=>{
    const WRONG="/ddddd";
    test("is404 /:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    });
    test("is404 /:non/:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+WRONG+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    });
    test("is404 /:non/:non/:non", async()=>{
        let failure=false;
        try {
            await axios(BASE_URL+WRONG+WRONG+WRONG);
        } catch(error) {
            failure=true;
        }

        expect(failure).toEqual(true);
    });
});