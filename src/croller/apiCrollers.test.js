import axios from "axios";
import { URLs, extractBugsRanking, extractMelonRanking } from "./apiCrollers.js";

describe("✅ URLs.bugs", ()=>{
    test(`isOk ${URLs.bugs[0]}`, async()=>{
        let failure=false;
        try {
            await axios(URLs.bugs[0]);
        } catch (error) {
            failure=true;
        }
        
        expect(failure).toEqual(false);
    });
    test(`isOk ${URLs.bugs[1]}`, async()=>{
        let failure=false;
        try {
            await axios(URLs.bugs[1]);
        } catch (error) {
            failure=true;
        }
        
        expect(failure).toEqual(false);
    });
});
describe("✅ URLs.melon", ()=>{
    test(`isOk ${URLs.melon[0]}`, async()=>{
        let failure=false;
        try {
            await axios(URLs.melon[0]);
        } catch (error) {
            failure=true;
        }
        
        expect(failure).toEqual(false);
    });
    test(`isOk ${URLs.melon[1]}`, async()=>{
        let failure=false;
        try {
            await axios(URLs.melon[1]);
        } catch (error) {
            failure=true;
        }
        
        expect(failure).toEqual(false);
    });
    test(`isOk ${URLs.melon[2]}`, async()=>{
        let failure=false;
        try {
            await axios(URLs.melon[2]);
        } catch (error) {
            failure=true;
        }
        
        expect(failure).toEqual(false);
    });
});

describe("✅ extractBugsRanking", ()=>{
    describe("Bugs Daily Ranking", ()=>{
        let html=null;
        let datas=[];
        test("pre-crolling", async()=>{
            html=await axios(URLs.bugs[0]);
            datas=extractBugsRanking(html);
        })
        test("data.index", ()=>{
            let failure=false;
            datas.forEach((element,index)=>{
                if (element.index !== index+1) {
                    failure=true;
                }
            })
            expect(failure).toEqual(false);
        });
        test("data.title", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.title==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.singer", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (element.singer.length===0) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.elbum", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.elbum==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.ranking_changing", ()=>{
            let failure=false;
            let target=null;
            datas.forEach(element=>{
                target=element.ranking_changing;
                if (target.arrow===undefined || target.count===undefined) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
    });
    describe("Bugs Weekly Ranking",()=>{
        let html=null;
        let datas=[];
        test("pre-crolling", async()=>{
            html=await axios(URLs.bugs[1]);
            datas=extractBugsRanking(html);
        })
        test("data.index", ()=>{
            let failure=false;
            datas.forEach((element,index)=>{
                if (element.index !== index+1) {
                    failure=true;
                }
            })
            expect(failure).toEqual(false);
        });
        test("data.title", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.title==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.singer", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (element.singer.length===0) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.elbum", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.elbum==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.ranking_changing", ()=>{
            let failure=false;
            let target=null;
            datas.forEach(element=>{
                target=element.ranking_changing;
                if (target.arrow===undefined || target.count===undefined) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
    });
});

describe("✅ extractMelonRanking", ()=>{
    describe("Melon Daily Ranking",()=>{
        let html=null;
        let datas=[];
        test("pre-crolling", async()=>{
            html=await axios(URLs.melon[0]);
            datas=extractBugsRanking(html);
        })
        test("data.index", ()=>{
            let failure=false;
            datas.forEach((element,index)=>{
                if (element.index !== index+1) {
                    failure=true;
                }
            })
            expect(failure).toEqual(false);
        });
        test("data.title", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.title==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.singer", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (element.singer.length===0) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.elbum", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.elbum==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.ranking_changing", ()=>{
            let failure=false;
            let target=null;
            datas.forEach(element=>{
                target=element.ranking_changing;
                if (target.arrow===undefined || target.count===undefined) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
    });
    describe("Melon Weekly Ranking",()=>{
        let html=null;
        let datas=[];
        test("pre-crolling", async()=>{
            html=await axios(URLs.melon[1]);
            datas=extractBugsRanking(html);
        })
        test("data.index", ()=>{
            let failure=false;
            datas.forEach((element,index)=>{
                if (element.index !== index+1) {
                    failure=true;
                }
            })
            expect(failure).toEqual(false);
        });
        test("data.title", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.title==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.singer", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (element.singer.length===0) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.elbum", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.elbum==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.ranking_changing", ()=>{
            let failure=false;
            let target=null;
            datas.forEach(element=>{
                target=element.ranking_changing;
                if (target.arrow===undefined || target.count===undefined) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
    });
    describe("Melon Monthly Ranking",()=>{
        let html=null;
        let datas=[];
        test("pre-crolling", async()=>{
            html=await axios(URLs.melon[2]);
            datas=extractBugsRanking(html);
        })
        test("data.index", ()=>{
            let failure=false;
            datas.forEach((element,index)=>{
                if (element.index !== index+1) {
                    failure=true;
                }
            })
            expect(failure).toEqual(false);
        });
        test("data.title", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.title==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.singer", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (element.singer.length===0) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.elbum", ()=>{
            let failure=false;
            datas.forEach(element=>{
                if (datas.elbum==="") {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
        test("data.ranking_changing", ()=>{
            let failure=false;
            let target=null;
            datas.forEach(element=>{
                target=element.ranking_changing;
                if (target.arrow===undefined || target.count===undefined) {
                    failure=true;
                }
            });
            expect(failure).toEqual(false);
        });
    });
});

// describe("Bugs Extractor Check", ()=>{
//     test("========== Bugs Datas Check ==========", ()=>{});
//     test("isOk Bugs Daily Charts Length 100?", async()=>{
//         let HTML;
//         try {
//             HTML=await axios.get(URLs.bugs[0]);
//         } catch(error) {
//             HTML=undefined;
//         }

//         if (HTML===undefined) {
//             expect(HTML===undefined).toEqual(true);
//         } else {
//             const datas=extractBugsRanking(HTML);
//             expect(datas.length===100).toEqual(true);
//         }
//     });
//     test("isOk Bugs Weekly Charts Length 100?", async()=>{
//         let HTML;
//         try {
//             HTML=await axios.get(URLs.bugs[1]);
//         } catch(error) {
//             HTML=undefined;
//         }

//         if (HTML===undefined) {
//             expect(HTML===undefined).toEqual(true);
//         } else {
//             const datas=extractBugsRanking(HTML);
//             expect(datas.length===100).toEqual(true);
//         }
//     });
// });

// describe("Melon Extractor Check", ()=>{
//     test("========== Melon Datas Check ==========", ()=>{});
//     test("isOk Melon Daily Charts Length 100?", async()=>{
//         let HTML;
//         try {
//             HTML=await axios.get(URLs.melon[0]);
//         } catch(error) {
//             HTML=undefined;
//         }

//         if (HTML===undefined) {
//             expect(HTML===undefined).toEqual(true);
//         } else {
//             const datas=extractMelonRanking(HTML);
//             expect(datas.length===100).toEqual(true);
//         }
//     });
//     test("isOk Melon Weekly Charts Length 100?", async()=>{
//         let HTML;
//         try {
//             HTML=await axios.get(URLs.melon[1]);
//         } catch(error) {
//             HTML=undefined;
//         }

//         if (HTML===undefined) {
//             expect(HTML===undefined).toEqual(true);
//         } else {
//             const datas=extractMelonRanking(HTML);
//             expect(datas.length===100).toEqual(true);
//         }
//     });
//     test("isOk Melon Monthly Charts Length 100?", async()=>{
//         let HTML;
//         try {
//             HTML=await axios.get(URLs.melon[2]);
//         } catch(error) {
//             HTML=undefined;
//         }

//         if (HTML===undefined) {
//             expect(HTML===undefined).toEqual(true);
//         } else {
//             const datas=extractMelonRanking(HTML);
//             expect(datas.length===100).toEqual(true);
//         }
//     });
// });
