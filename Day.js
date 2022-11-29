import fetch from "node-fetch";

const totalLanguages = [];
let lang = [];
let countryArea = []
function fetchU() {
    
    fetch('https://restcountries.com/v3/all')
        .then(res => res.json())
        .then((res) => {
            for (let i = 0; i < res.length; i++) {
                if (res[i].languages) {
                    Object.values(res[i].languages).forEach((e) => {
                        if(totalLanguages.indexOf(e) === -1) {
                            totalLanguages.push(e)
                        }
                        let find = lang.findIndex((ele) => ele.language === e)
                        
                        if(find === -1) {
                            lang.push({language: e, count: 1})
                        }
                        else {
                            lang[find].count++;
                        }
                    })
                    
                }
                countryArea.push({country: res[i].name.common, area: res[i].area})
            }
            
            lang = lang.sort((a, b) => {return b.count - a.count});
            const topMost = [];
            const area = []
            for(let i = 0; i < 15; i++) {
                topMost.push(lang[i])
            }
            countryArea = countryArea.sort((a, b) => b.area - a.area)
            for(let i = 0; i < 10; i++) {
                area.push(countryArea[i])
            }
            console.log(area)
            console.log(topMost)
            console.log('Total Languages', totalLanguages.length);
        })
}

fetchU();