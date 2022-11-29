import fetch from "node-fetch";

const totalLanguages = [];

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
                    })
                    
                }
                
            }
            
            console.log('Total Languages', totalLanguages.length);
        })
}

fetchU();