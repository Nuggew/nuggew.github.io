const title = document.querySelector("title");
const navTitle = document.getElementById("nav-title");
const titles = [
    "Nuggew",
    "NUGGEW",
    "nuggew",
    "𝔫𝔲𝔤𝔤𝔢𝔴",
    "ᑎυᎶ𝓖𝔼Ŵ",
    "𝓃𝓊𝑔𝑔𝑒𝓌",
    "𝕟𝕦𝕘𝕘𝕖𝕨",
    "ｎｕｇｇｅｗ",
    "​🇳​​🇺​​🇬​​🇬​​🇪​​🇼​",
    "🄽🅄🄶🄶🄴🅆",
];

const sleep = async(ms) => {return await new Promise(resolve => setTimeout(resolve, ms));}
function titlesLoop(){
    for (let i=0; i < titles.length; i++){
        setTimeout(() => {
            title.innerHTML = titles[i] + " Portfolio";
            navTitle.innerHTML = titles[i];
        }, 100 * i);
    };

    setTimeout(() => {
        titlesLoop();
    }, 100 * (titles.length));
}

titlesLoop();